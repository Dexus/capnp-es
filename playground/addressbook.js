// This file has been automatically generated by capnp-es.
import * as $ from "capnp-es";
export const _capnpFileId = BigInt("0xef1b5abe02e1f8d4");
export const Person_PhoneNumber_Type = {
  MOBILE: 0,
  HOME: 1,
  WORK: 2
};
export class Person_PhoneNumber extends $.Struct {
  static Type = Person_PhoneNumber_Type;
  static _capnp = {
    displayName: "PhoneNumber",
    id: "af663da31c027e0e",
    size: new $.ObjectSize(8, 1)
  };
  get number() {
    return $.utils.getText(0, this);
  }
  set number(value) {
    $.utils.setText(0, value, this);
  }
  get type() {
    return $.utils.getUint16(0, this);
  }
  set type(value) {
    $.utils.setUint16(0, value, this);
  }
  toString() {
    return "Person_PhoneNumber_" + super.toString();
  }
}
export const Person_Employment_Which = {
  UNEMPLOYED: 0,
  EMPLOYER: 1,
  SCHOOL: 2,
  SELF_EMPLOYED: 3
};
export class Person_Employment extends $.Struct {
  static UNEMPLOYED = Person_Employment_Which.UNEMPLOYED;
  static EMPLOYER = Person_Employment_Which.EMPLOYER;
  static SCHOOL = Person_Employment_Which.SCHOOL;
  static SELF_EMPLOYED = Person_Employment_Which.SELF_EMPLOYED;
  static _capnp = {
    displayName: "employment",
    id: "e88780a90af3da0c",
    size: new $.ObjectSize(8, 4)
  };
  get _isUnemployed() {
    return $.utils.getUint16(4, this) === 0;
  }
  set unemployed(_) {
    $.utils.setUint16(4, 0, this);
  }
  get employer() {
    $.utils.testWhich("employer", $.utils.getUint16(4, this), 1, this);
    return $.utils.getText(3, this);
  }
  get _isEmployer() {
    return $.utils.getUint16(4, this) === 1;
  }
  set employer(value) {
    $.utils.setUint16(4, 1, this);
    $.utils.setText(3, value, this);
  }
  get school() {
    $.utils.testWhich("school", $.utils.getUint16(4, this), 2, this);
    return $.utils.getText(3, this);
  }
  get _isSchool() {
    return $.utils.getUint16(4, this) === 2;
  }
  set school(value) {
    $.utils.setUint16(4, 2, this);
    $.utils.setText(3, value, this);
  }
  get _isSelfEmployed() {
    return $.utils.getUint16(4, this) === 3;
  }
  set selfEmployed(_) {
    $.utils.setUint16(4, 3, this);
  }
  toString() {
    return "Person_Employment_" + super.toString();
  }
  which() {
    return $.utils.getUint16(4, this);
  }
}
export class Person extends $.Struct {
  static PhoneNumber = Person_PhoneNumber;
  static _capnp = {
    displayName: "Person",
    id: "d94307c4985be8e7",
    size: new $.ObjectSize(8, 4)
  };
  static _Phones;
  get id() {
    return $.utils.getUint32(0, this);
  }
  set id(value) {
    $.utils.setUint32(0, value, this);
  }
  get name() {
    return $.utils.getText(0, this);
  }
  set name(value) {
    $.utils.setText(0, value, this);
  }
  get email() {
    return $.utils.getText(1, this);
  }
  set email(value) {
    $.utils.setText(1, value, this);
  }
  _adoptPhones(value) {
    $.utils.adopt(value, $.utils.getPointer(2, this));
  }
  _disownPhones() {
    return $.utils.disown(this.phones);
  }
  get phones() {
    return $.utils.getList(2, Person._Phones, this);
  }
  _hasPhones() {
    return !$.utils.isNull($.utils.getPointer(2, this));
  }
  _initPhones(length) {
    return $.utils.initList(2, Person._Phones, length, this);
  }
  set phones(value) {
    $.utils.copyFrom(value, $.utils.getPointer(2, this));
  }
  get employment() {
    return $.utils.getAs(Person_Employment, this);
  }
  _initEmployment() {
    return $.utils.getAs(Person_Employment, this);
  }
  toString() {
    return "Person_" + super.toString();
  }
}
export class AddressBook extends $.Struct {
  static _capnp = {
    displayName: "AddressBook",
    id: "c06ea6d038a357bb",
    size: new $.ObjectSize(0, 1)
  };
  static _People;
  _adoptPeople(value) {
    $.utils.adopt(value, $.utils.getPointer(0, this));
  }
  _disownPeople() {
    return $.utils.disown(this.people);
  }
  get people() {
    return $.utils.getList(0, AddressBook._People, this);
  }
  _hasPeople() {
    return !$.utils.isNull($.utils.getPointer(0, this));
  }
  _initPeople(length) {
    return $.utils.initList(0, AddressBook._People, length, this);
  }
  set people(value) {
    $.utils.copyFrom(value, $.utils.getPointer(0, this));
  }
  toString() {
    return "AddressBook_" + super.toString();
  }
}
Person._Phones = $.CompositeList(Person_PhoneNumber);
AddressBook._People = $.CompositeList(Person);
