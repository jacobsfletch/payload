import type { FormState } from 'payload/types'

import type { LinkPayload } from '../plugins/floatingLinkEditor/types'

export interface Props {
  drawerSlug: string
  handleModalSubmit: (fields: FormState, data: Record<string, unknown>) => void
  stateData?: LinkPayload
}