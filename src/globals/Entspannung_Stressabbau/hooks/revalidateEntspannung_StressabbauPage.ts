import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateEntspannung_StressabbauPage: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating entspannung_StressabbauPage`)

    revalidateTag('global_entspannung_StressabbauPage')
  }

  return doc
}
