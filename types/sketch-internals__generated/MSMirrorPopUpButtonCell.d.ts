interface MSMirrorPopUpButtonCellUninitialized<InitializedType = MSMirrorPopUpButtonCell> extends NSPopUpButtonCellUninitialized<MSMirrorPopUpButtonCell> {}
interface MSMirrorPopUpButtonCell extends NSPopUpButtonCell {
}
declare const MSMirrorPopUpButtonCell: {
  alloc(): MSMirrorPopUpButtonCellUninitialized;
  class(): MSMirrorPopUpButtonCell;
}

