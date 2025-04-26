"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSession = exports.auth = exports.signOut = exports.signIn = exports.handlers = void 0;
var next_auth_1 = require("next-auth");
var google_1 = require("next-auth/providers/google");
exports.handlers = (_a = (0, next_auth_1.default)({
    pages: {
        signIn: '/signin',
    },
    providers: [(0, google_1.default)({})],
}), _a.handlers), exports.signIn = _a.signIn, exports.signOut = _a.signOut, exports.auth = _a.auth, exports.useSession = _a.useSession;
