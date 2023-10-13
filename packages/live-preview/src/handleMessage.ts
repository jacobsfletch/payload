import { mergeData } from '.'

// This value will only come through on the initial message
// Save it as a global variable when it arrive for reference later
// Future message will not contain this value
// TODO: type this from `fieldSchemaToJSON` return type
let fieldSchemaJSON = undefined

export const handleMessage = async <T>(args: {
  depth: number
  event: MessageEvent
  initialData: T
  serverURL: string
}): Promise<T> => {
  const { depth, event, initialData, serverURL } = args
  if (event.origin === serverURL && event.data) {
    const eventData = JSON.parse(event?.data)

    if (eventData.type === 'payload-live-preview') {
      if (!fieldSchemaJSON && eventData.fieldSchemaJSON) {
        fieldSchemaJSON = eventData.fieldSchemaJSON
      }

      console.log('fieldSchemaJSON', fieldSchemaJSON)

      const mergedData = await mergeData<T>({
        depth,
        fieldSchema: fieldSchemaJSON,
        incomingData: eventData.data,
        initialData,
        serverURL,
      })

      return mergedData
    }
  }

  return initialData
}
