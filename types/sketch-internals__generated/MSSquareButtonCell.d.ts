interface MSSquareButtonCellUninitialized<InitializedType = MSSquareButtonCell> extends NSButtonCellUninitialized<MSSquareButtonCell> {}
interface MSSquareButtonCell extends NSButtonCell {
}
declare const MSSquareButtonCell: {
  alloc(): MSSquareButtonCellUninitialized;
  class(): MSSquareButtonCell;
}

