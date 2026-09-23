import { NextResponse } from 'next/server';

const RECORD_ID = 'ff808181a09d98f701a0cf92fd497e82';
const API_URL = `https://api.restful-api.dev/objects/${RECORD_ID}`;

const DEFAULT_WISHES = [
  { id: 1, name: 'Aarav Sharma', message: 'Wishing you both a lifetime of love and happiness!' },
  { id: 2, name: 'Priya Patel', message: 'So excited to celebrate your special day. Congratulations!' }
];

export async function GET() {
  try {
    const res = await fetch(API_URL, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data?.data?.wishes && Array.isArray(data.data.wishes)) {
        return NextResponse.json({ wishes: data.data.wishes });
      }
    }
  } catch (error) {
    console.error('Error fetching wishes from cloud store:', error);
  }
  return NextResponse.json({ wishes: DEFAULT_WISHES });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !message) {
      return NextResponse.json({ error: 'Name and message are required' }, { status: 400 });
    }

    // Fetch current wishes
    let currentWishes = DEFAULT_WISHES;
    try {
      const getRes = await fetch(API_URL, { cache: 'no-store' });
      if (getRes.ok) {
        const getData = await getRes.json();
        if (getData?.data?.wishes && Array.isArray(getData.data.wishes)) {
          currentWishes = getData.data.wishes;
        }
      }
    } catch (e) {}

    const newWish = { id: Date.now(), name: name.trim(), message: message.trim() };
    const updatedWishes = [newWish, ...currentWishes];

    // Save updated wishes back to cloud store
    await fetch(API_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Pankaj & Manpreet Wedding Wishes',
        data: { wishes: updatedWishes }
      })
    });

    return NextResponse.json({ success: true, wishes: updatedWishes });
  } catch (error) {
    console.error('Error saving wish to cloud store:', error);
    return NextResponse.json({ error: 'Failed to save wish' }, { status: 500 });
  }
}
