"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var User = require("../Models/User");
var router = express_1.default.Router();
//Create user
router.post("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, newUser, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = new User({
                    name: req.body.name,
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user.save()];
            case 2:
                newUser = _a.sent();
                return [2 /*return*/, res.status(200).json({ msg: "Added new user", user: newUser })];
            case 3:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(400).json({ msg: error_1.message })];
            case 4: return [2 /*return*/];
        }
    });
}); });
//Delete
router.delete("/:id", getUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, req.user.remove()];
            case 1:
                _a.sent();
                return [2 /*return*/, res.status(200).json({ msg: "User deleted" })];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(400).json({ msg: error_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
//Get all
router.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allUsers, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User.find()];
            case 1:
                allUsers = _a.sent();
                res.json(allUsers);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).json({ msg: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//Add item
router.patch("/:id", getUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newItem, currentItems, updatedUser, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                newItem = { name: req.body.newItem };
                currentItems = req.user.items;
                currentItems.push(newItem);
                req.user.items = currentItems;
                return [4 /*yield*/, req.user.save()];
            case 1:
                updatedUser = _a.sent();
                res.json(updatedUser);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(400).json({ msg: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//Update
router.patch("/update/:id", getUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedUser, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (req.body.name != null) {
                    req.user.name = req.body.name;
                }
                if (req.body.items != null) {
                    req.user.items = req.body.items;
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, req.user.save()];
            case 2:
                updatedUser = _a.sent();
                return [2 /*return*/, res.status(200).json({ msg: "User updated", user: updatedUser })];
            case 3:
                error_5 = _a.sent();
                return [2 /*return*/, res.status(400).json({ msg: error_5.message })];
            case 4: return [2 /*return*/];
        }
    });
}); });
function getUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var user, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, User.findById(req.params.id)];
                case 1:
                    user = _a.sent();
                    if (user == null) {
                        return [2 /*return*/, res.status(404).json({ msg: "Can't find user" })];
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    return [2 /*return*/, res.status(500).json({ msg: error_6.message })];
                case 3:
                    req.user = user;
                    next();
                    return [2 /*return*/];
            }
        });
    });
}
module.exports = router;
