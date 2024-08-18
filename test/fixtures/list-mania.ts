// This file has been automatically generated by capnp-es.
import * as $ from "capnp-es";
export const _capnpFileId = BigInt("0xb4dbefd56457c333");
export class ListMania extends $.Struct {
  static readonly _capnp = {
    displayName: "ListMania",
    id: "d0a988493b63e78b",
    size: new $.ObjectSize(0, 16)
  };
  static _CompositeList: $.ListCtor<ListManiaStruct>;
  adoptBoolList(value: $.Orphan<$.List<boolean>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownBoolList(): $.Orphan<$.List<boolean>> {
    return $.Struct.disown(this.getBoolList());
  }
  getBoolList(): $.List<boolean> {
    return $.Struct.getList(0, $.BoolList, this);
  }
  hasBoolList(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initBoolList(length: number): $.List<boolean> {
    return $.Struct.initList(0, $.BoolList, length, this);
  }
  setBoolList(value: $.List<boolean>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptCompositeList(value: $.Orphan<$.List<ListManiaStruct>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownCompositeList(): $.Orphan<$.List<ListManiaStruct>> {
    return $.Struct.disown(this.getCompositeList());
  }
  getCompositeList(): $.List<ListManiaStruct> {
    return $.Struct.getList(1, ListMania._CompositeList, this);
  }
  hasCompositeList(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  initCompositeList(length: number): $.List<ListManiaStruct> {
    return $.Struct.initList(1, ListMania._CompositeList, length, this);
  }
  setCompositeList(value: $.List<ListManiaStruct>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  adoptDataList(value: $.Orphan<$.List<$.Data>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(2, this));
  }
  disownDataList(): $.Orphan<$.List<$.Data>> {
    return $.Struct.disown(this.getDataList());
  }
  getDataList(): $.List<$.Data> {
    return $.Struct.getList(2, $.DataList, this);
  }
  hasDataList(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(2, this));
  }
  initDataList(length: number): $.List<$.Data> {
    return $.Struct.initList(2, $.DataList, length, this);
  }
  setDataList(value: $.List<$.Data>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(2, this));
  }
  adoptFloat32List(value: $.Orphan<$.List<number>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(3, this));
  }
  disownFloat32List(): $.Orphan<$.List<number>> {
    return $.Struct.disown(this.getFloat32List());
  }
  getFloat32List(): $.List<number> {
    return $.Struct.getList(3, $.Float32List, this);
  }
  hasFloat32List(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(3, this));
  }
  initFloat32List(length: number): $.List<number> {
    return $.Struct.initList(3, $.Float32List, length, this);
  }
  setFloat32List(value: $.List<number>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(3, this));
  }
  adoptFloat64List(value: $.Orphan<$.List<number>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(4, this));
  }
  disownFloat64List(): $.Orphan<$.List<number>> {
    return $.Struct.disown(this.getFloat64List());
  }
  getFloat64List(): $.List<number> {
    return $.Struct.getList(4, $.Float64List, this);
  }
  hasFloat64List(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(4, this));
  }
  initFloat64List(length: number): $.List<number> {
    return $.Struct.initList(4, $.Float64List, length, this);
  }
  setFloat64List(value: $.List<number>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(4, this));
  }
  adoptInt8List(value: $.Orphan<$.List<number>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(5, this));
  }
  disownInt8List(): $.Orphan<$.List<number>> {
    return $.Struct.disown(this.getInt8List());
  }
  getInt8List(): $.List<number> {
    return $.Struct.getList(5, $.Int8List, this);
  }
  hasInt8List(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(5, this));
  }
  initInt8List(length: number): $.List<number> {
    return $.Struct.initList(5, $.Int8List, length, this);
  }
  setInt8List(value: $.List<number>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(5, this));
  }
  adoptInt16List(value: $.Orphan<$.List<number>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(6, this));
  }
  disownInt16List(): $.Orphan<$.List<number>> {
    return $.Struct.disown(this.getInt16List());
  }
  getInt16List(): $.List<number> {
    return $.Struct.getList(6, $.Int16List, this);
  }
  hasInt16List(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(6, this));
  }
  initInt16List(length: number): $.List<number> {
    return $.Struct.initList(6, $.Int16List, length, this);
  }
  setInt16List(value: $.List<number>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(6, this));
  }
  adoptInt32List(value: $.Orphan<$.List<number>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(7, this));
  }
  disownInt32List(): $.Orphan<$.List<number>> {
    return $.Struct.disown(this.getInt32List());
  }
  getInt32List(): $.List<number> {
    return $.Struct.getList(7, $.Int32List, this);
  }
  hasInt32List(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(7, this));
  }
  initInt32List(length: number): $.List<number> {
    return $.Struct.initList(7, $.Int32List, length, this);
  }
  setInt32List(value: $.List<number>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(7, this));
  }
  adoptInt64List(value: $.Orphan<$.List<bigint>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(8, this));
  }
  disownInt64List(): $.Orphan<$.List<bigint>> {
    return $.Struct.disown(this.getInt64List());
  }
  getInt64List(): $.List<bigint> {
    return $.Struct.getList(8, $.Int64List, this);
  }
  hasInt64List(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(8, this));
  }
  initInt64List(length: number): $.List<bigint> {
    return $.Struct.initList(8, $.Int64List, length, this);
  }
  setInt64List(value: $.List<bigint>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(8, this));
  }
  adoptInterfaceList(value: $.Orphan<$.List<$.Interface>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(9, this));
  }
  disownInterfaceList(): $.Orphan<$.List<$.Interface>> {
    return $.Struct.disown(this.getInterfaceList());
  }
  getInterfaceList(): $.List<$.Interface> {
    return $.Struct.getList(9, $.InterfaceList, this);
  }
  hasInterfaceList(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(9, this));
  }
  initInterfaceList(length: number): $.List<$.Interface> {
    return $.Struct.initList(9, $.InterfaceList, length, this);
  }
  setInterfaceList(value: $.List<$.Interface>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(9, this));
  }
  adoptTextList(value: $.Orphan<$.List<string>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(10, this));
  }
  disownTextList(): $.Orphan<$.List<string>> {
    return $.Struct.disown(this.getTextList());
  }
  getTextList(): $.List<string> {
    return $.Struct.getList(10, $.TextList, this);
  }
  hasTextList(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(10, this));
  }
  initTextList(length: number): $.List<string> {
    return $.Struct.initList(10, $.TextList, length, this);
  }
  setTextList(value: $.List<string>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(10, this));
  }
  adoptUint8List(value: $.Orphan<$.List<number>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(11, this));
  }
  disownUint8List(): $.Orphan<$.List<number>> {
    return $.Struct.disown(this.getUint8List());
  }
  getUint8List(): $.List<number> {
    return $.Struct.getList(11, $.Uint8List, this);
  }
  hasUint8List(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(11, this));
  }
  initUint8List(length: number): $.List<number> {
    return $.Struct.initList(11, $.Uint8List, length, this);
  }
  setUint8List(value: $.List<number>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(11, this));
  }
  adoptUint16List(value: $.Orphan<$.List<number>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(12, this));
  }
  disownUint16List(): $.Orphan<$.List<number>> {
    return $.Struct.disown(this.getUint16List());
  }
  getUint16List(): $.List<number> {
    return $.Struct.getList(12, $.Uint16List, this);
  }
  hasUint16List(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(12, this));
  }
  initUint16List(length: number): $.List<number> {
    return $.Struct.initList(12, $.Uint16List, length, this);
  }
  setUint16List(value: $.List<number>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(12, this));
  }
  adoptUint32List(value: $.Orphan<$.List<number>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(13, this));
  }
  disownUint32List(): $.Orphan<$.List<number>> {
    return $.Struct.disown(this.getUint32List());
  }
  getUint32List(): $.List<number> {
    return $.Struct.getList(13, $.Uint32List, this);
  }
  hasUint32List(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(13, this));
  }
  initUint32List(length: number): $.List<number> {
    return $.Struct.initList(13, $.Uint32List, length, this);
  }
  setUint32List(value: $.List<number>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(13, this));
  }
  adoptUint64List(value: $.Orphan<$.List<bigint>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(14, this));
  }
  disownUint64List(): $.Orphan<$.List<bigint>> {
    return $.Struct.disown(this.getUint64List());
  }
  getUint64List(): $.List<bigint> {
    return $.Struct.getList(14, $.Uint64List, this);
  }
  hasUint64List(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(14, this));
  }
  initUint64List(length: number): $.List<bigint> {
    return $.Struct.initList(14, $.Uint64List, length, this);
  }
  setUint64List(value: $.List<bigint>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(14, this));
  }
  adoptVoidList(value: $.Orphan<$.List<$.Void>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(15, this));
  }
  disownVoidList(): $.Orphan<$.List<$.Void>> {
    return $.Struct.disown(this.getVoidList());
  }
  getVoidList(): $.List<$.Void> {
    return $.Struct.getList(15, $.VoidList, this);
  }
  hasVoidList(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(15, this));
  }
  initVoidList(length: number): $.List<$.Void> {
    return $.Struct.initList(15, $.VoidList, length, this);
  }
  setVoidList(value: $.List<$.Void>): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(15, this));
  }
  toString(): string {
    return "ListMania_" + super.toString();
  }
}
export class ListManiaInterface extends $.Struct {
  static readonly _capnp = {
    displayName: "ListManiaInterface",
    id: "8a94079c3c57204f",
    size: new $.ObjectSize(0, 0)
  };
  toString(): string {
    return "ListManiaInterface_" + super.toString();
  }
}
export class ListManiaStruct extends $.Struct {
  static readonly _capnp = {
    displayName: "ListManiaStruct",
    id: "9e1eb66286605522",
    size: new $.ObjectSize(0, 1)
  };
  adoptSelf(value: $.Orphan<ListMania>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownSelf(): $.Orphan<ListMania> {
    return $.Struct.disown(this.getSelf());
  }
  getSelf(): ListMania {
    return $.Struct.getStruct(0, ListMania, this);
  }
  hasSelf(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initSelf(): ListMania {
    return $.Struct.initStructAt(0, ListMania, this);
  }
  setSelf(value: ListMania): void {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "ListManiaStruct_" + super.toString();
  }
}
ListMania._CompositeList = $.CompositeList(ListManiaStruct);
