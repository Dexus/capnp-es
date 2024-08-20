import * as $ from "../serialization";
export const _capnpFileId = BigInt("0xa184c7885cdaf2a1");
export const Side = {
  SERVER: 0,
  CLIENT: 1,
} as const;
export type Side = (typeof Side)[keyof typeof Side];
export class VatId extends $.Struct {
  static readonly _capnp = {
    displayName: "VatId",
    id: "d20b909fee733a8e",
    size: new $.ObjectSize(8, 0),
  };
  get side(): Side {
    return $.utils.getUint16(0, this) as Side;
  }
  set side(value: Side) {
    $.utils.setUint16(0, value, this);
  }
  toString(): string {
    return "VatId_" + super.toString();
  }
}
export class ProvisionId extends $.Struct {
  static readonly _capnp = {
    displayName: "ProvisionId",
    id: "b88d09a9c5f39817",
    size: new $.ObjectSize(8, 0),
  };
  get joinId(): number {
    return $.utils.getUint32(0, this);
  }
  set joinId(value: number) {
    $.utils.setUint32(0, value, this);
  }
  toString(): string {
    return "ProvisionId_" + super.toString();
  }
}
export class RecipientId extends $.Struct {
  static readonly _capnp = {
    displayName: "RecipientId",
    id: "89f389b6fd4082c1",
    size: new $.ObjectSize(0, 0),
  };
  toString(): string {
    return "RecipientId_" + super.toString();
  }
}
export class ThirdPartyCapId extends $.Struct {
  static readonly _capnp = {
    displayName: "ThirdPartyCapId",
    id: "b47f4979672cb59d",
    size: new $.ObjectSize(0, 0),
  };
  toString(): string {
    return "ThirdPartyCapId_" + super.toString();
  }
}
export class JoinKeyPart extends $.Struct {
  static readonly _capnp = {
    displayName: "JoinKeyPart",
    id: "95b29059097fca83",
    size: new $.ObjectSize(8, 0),
  };
  get joinId(): number {
    return $.utils.getUint32(0, this);
  }
  set joinId(value: number) {
    $.utils.setUint32(0, value, this);
  }
  get partCount(): number {
    return $.utils.getUint16(4, this);
  }
  set partCount(value: number) {
    $.utils.setUint16(4, value, this);
  }
  get partNum(): number {
    return $.utils.getUint16(6, this);
  }
  set partNum(value: number) {
    $.utils.setUint16(6, value, this);
  }
  toString(): string {
    return "JoinKeyPart_" + super.toString();
  }
}
export class JoinResult extends $.Struct {
  static readonly _capnp = {
    displayName: "JoinResult",
    id: "9d263a3630b7ebee",
    size: new $.ObjectSize(8, 1),
  };
  get joinId(): number {
    return $.utils.getUint32(0, this);
  }
  set joinId(value: number) {
    $.utils.setUint32(0, value, this);
  }
  get succeeded(): boolean {
    return $.utils.getBit(32, this);
  }
  set succeeded(value: boolean) {
    $.utils.setBit(32, value, this);
  }
  adoptCap(value: $.Orphan<$.Pointer>): void {
    $.utils.adopt(value, $.utils.getPointer(0, this));
  }
  disownCap(): $.Orphan<$.Pointer> {
    return $.utils.disown(this.cap);
  }
  get cap(): $.Pointer {
    return $.utils.getPointer(0, this);
  }
  hasCap(): boolean {
    return !$.utils.isNull($.utils.getPointer(0, this));
  }
  set cap(value: $.Pointer) {
    $.utils.copyFrom(value, $.utils.getPointer(0, this));
  }
  toString(): string {
    return "JoinResult_" + super.toString();
  }
}
