import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateRaucherentwohnungPage: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating raucherentwohnungPage`)

    revalidateTag('global_raucherentwohnungPage')
  }

  return doc
}
