interface BCHighlightColorButtonCellUninitialized<InitializedType = BCHighlightColorButtonCell> extends NSButtonCellUninitialized<BCHighlightColorButtonCell> {}
interface BCHighlightColorButtonCell extends NSButtonCell {
}
declare const BCHighlightColorButtonCell: {
  alloc(): BCHighlightColorButtonCellUninitialized;
  class(): BCHighlightColorButtonCell;
}

