import { NextResponse } from 'next/server';

const userThemes: Record<string, Record<string, string>> = {
  alice: {
    'primary-color': '#ff69b4',
    'accent-color': '#ffb347',
    'bg-default': '#fff0f6',
    'bg-paper': '#000001',
    'text-primary': '#000000',
  },
  bob: {
    'primary-color': '#000000',
    'accent-color': '#64b5f6',
    'bg-default': '#e3f2fd',
    'bg-paper': '#bbdefb',
    'text-primary': '#0d47a1',
  },
  charlie: {
    'primary-color': '#43a047',
    'accent-color': '#a5d6a7',
    'bg-default': '#e8f5e9',
    'bg-paper': '#c8e6c9',
    'text-primary': '#1b5e20',
  },
};

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  const cssVariables = userThemes[userId] || {
    'primary-color': '#8e24aa',
    'accent-color': '#ab47bc',
    'bg-default': '#f8f9fa',
    'bg-paper': '#ffffff',
    'text-primary': '#212121',
  };

  return NextResponse.json(cssVariables, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}