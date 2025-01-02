import {checkType} from "./checkType";
import {isNotType} from "./isNotType";
import {has} from "./has";
import {getCookie} from "./getCookie"
import {setCookie} from "./setCookie";
import {setStorage} from "./setStorage";
import {getStorage} from "./getStorage";
import {isEmpty} from "./isEmpty";
import {isChinese} from "./isChinese";
import {isEmail} from "./isEmail";
import {isPhoneNum} from "./isPhoneNum";
import {downloadBlob} from "./downloadBlob";
import {listDeduplicate} from "./listDeduplicate";
import {listRemove} from "./listRemove";
import {listGroup} from "./listGroup";
import {listInsert} from "./listInsert";
import {objectCopy} from "./objectCopy";
import {objectMerge} from "./objectMerge";
import {objectToQuery} from "./objectToQuery";
import {queryToObject} from "./queryToObject";
import {sort} from "./sort";
import {toArray} from "./toArray";
import {toDate} from "./toDate";
import {toThousands} from "./toThousands";

const xtools = {
  checkType,
  downloadBlob,
  has,
  isNotType,
  getCookie,
  setCookie,
  setStorage,
  getStorage,
  isEmpty,
  isChinese,
  isEmail,
  isPhoneNum,
  listDeduplicate,
  listRemove,
  listGroup,
  listInsert,
  objectCopy,
  objectMerge,
  objectToQuery,
  queryToObject,
  sort,
  toArray,
  toDate,
  toThousands
};

export default xtools;
