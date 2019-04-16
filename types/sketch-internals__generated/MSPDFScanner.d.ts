interface MSPDFScannerUninitialized<InitializedType = MSPDFScanner> extends PDFScannerUninitialized<MSPDFScanner> {}
interface MSPDFScanner extends PDFScanner {

  rootLayer(): MSLayerGroup;
  setRootLayer(rootLayer: MSLayerGroup): void;
  substituteFontName(): NSString;
  setSubstituteFontName(substituteFontName: NSString | string): void;
}
declare const MSPDFScanner: {
  alloc(): MSPDFScannerUninitialized;
  class(): MSPDFScanner;
}

