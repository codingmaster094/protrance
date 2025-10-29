import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateLampenfieber_Prufungsangst: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating lampenfieber_Prufungsangst`)

    revalidateTag('global_lampenfieber_Prufungsangst')
  }

  return doc
}
