interface MSLegacyDocumentReaderUninitialized<InitializedType = MSLegacyDocumentReader> extends MSDocumentReaderUninitialized<MSLegacyDocumentReader> {
  initWithFileURL(url: NSURL | null): InitializedType;
}
interface MSLegacyDocumentReader extends MSDocumentReader {
}
declare const MSLegacyDocumentReader: {
  alloc(): MSLegacyDocumentReaderUninitialized;
  class(): MSLegacyDocumentReader;
}

