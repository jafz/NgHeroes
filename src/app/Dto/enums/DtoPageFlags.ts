  export enum DtoPageFlags {
    None = 0,
    Empty = 1,
    ContainsImage = 2,
    UnknownRotation = 4,
    NoRotation = 8,
    Rotated_90CW = 16,
    Rotated_UpsideDown = 32,
    Rotated_90CCW = 64,
  }