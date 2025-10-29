import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextRequest } from 'next/server'
import type { GlobalSlug } from 'payload'
export const GET = async (req: NextRequest, { params }: { params: Promise<{ slug: string }> }) => {
  const payload = await getPayload({ config: configPromise })

  try {
    const { slug } = await params
    const data = await payload.findGlobal({
      slug: slug as GlobalSlug, 
    })

    return Response.json({
      success: true,
      slug: slug,
      data,
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: `Global with slug "${(await params).slug}" not found.`,
        error: (error as Error).message,
      },
      { status: 404 },
    )
  }
}
