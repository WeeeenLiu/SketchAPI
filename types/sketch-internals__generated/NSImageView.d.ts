interface NSImageViewUninitialized<InitializedType = NSImageView> extends NSControlUninitialized<NSImageView> {}
interface NSImageView extends NSControl, INSAccessibilityImage, INSMenuItemValidation {

  image(): NSImage;
  setImage(image: NSImage): void;
  imageAlignment(): NSImageAlignment;
  setImageAlignment(imageAlignment: NSImageAlignment): void;
  imageScaling(): NSImageScaling;
  setImageScaling(imageScaling: NSImageScaling): void;
  imageFrameStyle(): NSImageFrameStyle;
  setImageFrameStyle(imageFrameStyle: NSImageFrameStyle): void;
  editable(): boolean;
  setEditable(editable: boolean): void;
  contentTintColor(): NSColor;
  setContentTintColor(contentTintColor: NSColor): void;
  animates(): boolean;
  setAnimates(animates: boolean): void;
  allowsCutCopyPaste(): boolean;
  setAllowsCutCopyPaste(allowsCutCopyPaste: boolean): void;
}
declare const NSImageView: {
  alloc(): NSImageViewUninitialized;
  class(): NSImageView;  imageViewWithImage(image: NSImage): NSImageView;

}

