/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.messages = (function() {

    /**
     * Namespace messages.
     * @exports messages
     * @namespace
     */
    var messages = {};

    messages.entry = (function() {

        /**
         * Namespace entry.
         * @memberof messages
         * @namespace
         */
        var entry = {};

        entry.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof messages.entry
             * @interface IError
             * @property {messages.entry.Error.Code|null} [code] Error code
             * @property {string|null} [message] Error message
             */

            /**
             * Constructs a new Error.
             * @memberof messages.entry
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {messages.entry.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error code.
             * @member {messages.entry.Error.Code} code
             * @memberof messages.entry.Error
             * @instance
             */
            Error.prototype.code = 0;

            /**
             * Error message.
             * @member {string} message
             * @memberof messages.entry.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof messages.entry.Error
             * @static
             * @param {messages.entry.IError=} [properties] Properties to set
             * @returns {messages.entry.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link messages.entry.Error.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.Error
             * @static
             * @param {messages.entry.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link messages.entry.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.Error
             * @static
             * @param {messages.entry.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof messages.entry.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    switch (message.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.Error)
                    return object;
                var message = new $root.messages.entry.Error();
                switch (object.code) {
                case "UNKNOWN":
                case 0:
                    message.code = 0;
                    break;
                case "NOT_FOUND":
                case 1:
                    message.code = 1;
                    break;
                case "VALIDATION_FAILED":
                case 2:
                    message.code = 2;
                    break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.Error
             * @static
             * @param {messages.entry.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = options.enums === String ? "UNKNOWN" : 0;
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = options.enums === String ? $root.messages.entry.Error.Code[message.code] : message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof messages.entry.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Code enum.
             * @name messages.entry.Error.Code
             * @enum {string}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} NOT_FOUND=1 NOT_FOUND value
             * @property {number} VALIDATION_FAILED=2 VALIDATION_FAILED value
             */
            Error.Code = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "NOT_FOUND"] = 1;
                values[valuesById[2] = "VALIDATION_FAILED"] = 2;
                return values;
            })();

            return Error;
        })();

        entry.RequestContext = (function() {

            /**
             * Properties of a RequestContext.
             * @memberof messages.entry
             * @interface IRequestContext
             * @property {string|null} [userId] RequestContext userId
             * @property {string|null} [traceId] RequestContext traceId
             */

            /**
             * Constructs a new RequestContext.
             * @memberof messages.entry
             * @classdesc Represents a RequestContext.
             * @implements IRequestContext
             * @constructor
             * @param {messages.entry.IRequestContext=} [properties] Properties to set
             */
            function RequestContext(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestContext userId.
             * @member {string} userId
             * @memberof messages.entry.RequestContext
             * @instance
             */
            RequestContext.prototype.userId = "";

            /**
             * RequestContext traceId.
             * @member {string} traceId
             * @memberof messages.entry.RequestContext
             * @instance
             */
            RequestContext.prototype.traceId = "";

            /**
             * Creates a new RequestContext instance using the specified properties.
             * @function create
             * @memberof messages.entry.RequestContext
             * @static
             * @param {messages.entry.IRequestContext=} [properties] Properties to set
             * @returns {messages.entry.RequestContext} RequestContext instance
             */
            RequestContext.create = function create(properties) {
                return new RequestContext(properties);
            };

            /**
             * Encodes the specified RequestContext message. Does not implicitly {@link messages.entry.RequestContext.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.RequestContext
             * @static
             * @param {messages.entry.IRequestContext} message RequestContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestContext.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified RequestContext message, length delimited. Does not implicitly {@link messages.entry.RequestContext.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.RequestContext
             * @static
             * @param {messages.entry.IRequestContext} message RequestContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestContext.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestContext message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.RequestContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.RequestContext} RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestContext.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.RequestContext();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.string();
                        break;
                    case 2:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestContext message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.RequestContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.RequestContext} RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestContext.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestContext message.
             * @function verify
             * @memberof messages.entry.RequestContext
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestContext.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates a RequestContext message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.RequestContext
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.RequestContext} RequestContext
             */
            RequestContext.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.RequestContext)
                    return object;
                var message = new $root.messages.entry.RequestContext();
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from a RequestContext message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.RequestContext
             * @static
             * @param {messages.entry.RequestContext} message RequestContext
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestContext.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userId = "";
                    object.traceId = "";
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this RequestContext to JSON.
             * @function toJSON
             * @memberof messages.entry.RequestContext
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestContext.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestContext;
        })();

        entry.GetEntryRequest = (function() {

            /**
             * Properties of a GetEntryRequest.
             * @memberof messages.entry
             * @interface IGetEntryRequest
             * @property {string|null} [id] GetEntryRequest id
             * @property {string|null} [creatorId] GetEntryRequest creatorId
             * @property {string|null} [traceId] GetEntryRequest traceId
             * @property {messages.entry.IRequestContext|null} [context] GetEntryRequest context
             * @property {messages.entry.GetEntryRequest.IPayload|null} [payload] GetEntryRequest payload
             */

            /**
             * Constructs a new GetEntryRequest.
             * @memberof messages.entry
             * @classdesc Represents a GetEntryRequest.
             * @implements IGetEntryRequest
             * @constructor
             * @param {messages.entry.IGetEntryRequest=} [properties] Properties to set
             */
            function GetEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetEntryRequest id.
             * @member {string} id
             * @memberof messages.entry.GetEntryRequest
             * @instance
             */
            GetEntryRequest.prototype.id = "";

            /**
             * GetEntryRequest creatorId.
             * @member {string} creatorId
             * @memberof messages.entry.GetEntryRequest
             * @instance
             */
            GetEntryRequest.prototype.creatorId = "";

            /**
             * GetEntryRequest traceId.
             * @member {string} traceId
             * @memberof messages.entry.GetEntryRequest
             * @instance
             */
            GetEntryRequest.prototype.traceId = "";

            /**
             * GetEntryRequest context.
             * @member {messages.entry.IRequestContext|null|undefined} context
             * @memberof messages.entry.GetEntryRequest
             * @instance
             */
            GetEntryRequest.prototype.context = null;

            /**
             * GetEntryRequest payload.
             * @member {messages.entry.GetEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.entry.GetEntryRequest
             * @instance
             */
            GetEntryRequest.prototype.payload = null;

            /**
             * Creates a new GetEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {messages.entry.IGetEntryRequest=} [properties] Properties to set
             * @returns {messages.entry.GetEntryRequest} GetEntryRequest instance
             */
            GetEntryRequest.create = function create(properties) {
                return new GetEntryRequest(properties);
            };

            /**
             * Encodes the specified GetEntryRequest message. Does not implicitly {@link messages.entry.GetEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {messages.entry.IGetEntryRequest} message GetEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.creatorId);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.entry.RequestContext.encode(message.context, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.GetEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetEntryRequest message, length delimited. Does not implicitly {@link messages.entry.GetEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {messages.entry.IGetEntryRequest} message GetEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.GetEntryRequest} GetEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.GetEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.creatorId = reader.string();
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    case 4:
                        message.context = $root.messages.entry.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.payload = $root.messages.entry.GetEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.GetEntryRequest} GetEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetEntryRequest message.
             * @function verify
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                    if (!$util.isString(message.creatorId))
                        return "creatorId: string expected";
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.entry.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.GetEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a GetEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.GetEntryRequest} GetEntryRequest
             */
            GetEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.GetEntryRequest)
                    return object;
                var message = new $root.messages.entry.GetEntryRequest();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.creatorId != null)
                    message.creatorId = String(object.creatorId);
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.entry.GetEntryRequest.context: object expected");
                    message.context = $root.messages.entry.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.GetEntryRequest.payload: object expected");
                    message.payload = $root.messages.entry.GetEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a GetEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {messages.entry.GetEntryRequest} message GetEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.creatorId = "";
                    object.traceId = "";
                    object.context = null;
                    object.payload = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                    object.creatorId = message.creatorId;
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.entry.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.GetEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this GetEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.entry.GetEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GetEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.GetEntryRequest
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.GetEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.GetEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {messages.entry.GetEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.GetEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.GetEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {messages.entry.GetEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.GetEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {messages.entry.GetEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.GetEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.GetEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.GetEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.GetEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.GetEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.entry.GetEntryRequest.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {messages.entry.GetEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return GetEntryRequest;
        })();

        entry.GetEntryResponse = (function() {

            /**
             * Properties of a GetEntryResponse.
             * @memberof messages.entry
             * @interface IGetEntryResponse
             * @property {messages.entry.GetEntryResponse.IPayload|null} [payload] GetEntryResponse payload
             * @property {messages.entry.IError|null} [error] GetEntryResponse error
             * @property {string|null} [traceId] GetEntryResponse traceId
             */

            /**
             * Constructs a new GetEntryResponse.
             * @memberof messages.entry
             * @classdesc Represents a GetEntryResponse.
             * @implements IGetEntryResponse
             * @constructor
             * @param {messages.entry.IGetEntryResponse=} [properties] Properties to set
             */
            function GetEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetEntryResponse payload.
             * @member {messages.entry.GetEntryResponse.IPayload|null|undefined} payload
             * @memberof messages.entry.GetEntryResponse
             * @instance
             */
            GetEntryResponse.prototype.payload = null;

            /**
             * GetEntryResponse error.
             * @member {messages.entry.IError|null|undefined} error
             * @memberof messages.entry.GetEntryResponse
             * @instance
             */
            GetEntryResponse.prototype.error = null;

            /**
             * GetEntryResponse traceId.
             * @member {string} traceId
             * @memberof messages.entry.GetEntryResponse
             * @instance
             */
            GetEntryResponse.prototype.traceId = "";

            /**
             * Creates a new GetEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {messages.entry.IGetEntryResponse=} [properties] Properties to set
             * @returns {messages.entry.GetEntryResponse} GetEntryResponse instance
             */
            GetEntryResponse.create = function create(properties) {
                return new GetEntryResponse(properties);
            };

            /**
             * Encodes the specified GetEntryResponse message. Does not implicitly {@link messages.entry.GetEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {messages.entry.IGetEntryResponse} message GetEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.GetEntryResponse.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.entry.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified GetEntryResponse message, length delimited. Does not implicitly {@link messages.entry.GetEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {messages.entry.IGetEntryResponse} message GetEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.GetEntryResponse} GetEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.GetEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.entry.GetEntryResponse.Payload.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.error = $root.messages.entry.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.GetEntryResponse} GetEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetEntryResponse message.
             * @function verify
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.GetEntryResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.entry.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates a GetEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.GetEntryResponse} GetEntryResponse
             */
            GetEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.GetEntryResponse)
                    return object;
                var message = new $root.messages.entry.GetEntryResponse();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.GetEntryResponse.payload: object expected");
                    message.payload = $root.messages.entry.GetEntryResponse.Payload.fromObject(object.payload);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.entry.GetEntryResponse.error: object expected");
                    message.error = $root.messages.entry.Error.fromObject(object.error);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from a GetEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {messages.entry.GetEntryResponse} message GetEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.payload = null;
                    object.error = null;
                    object.traceId = "";
                }
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.GetEntryResponse.Payload.toObject(message.payload, options);
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.entry.Error.toObject(message.error, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this GetEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.entry.GetEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GetEntryResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.GetEntryResponse
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.GetEntryResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.GetEntryResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {messages.entry.GetEntryResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.GetEntryResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.GetEntryResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {messages.entry.GetEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.GetEntryResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {messages.entry.GetEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.GetEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.GetEntryResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.GetEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.GetEntryResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.GetEntryResponse.Payload)
                        return object;
                    var message = new $root.messages.entry.GetEntryResponse.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {messages.entry.GetEntryResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return GetEntryResponse;
        })();

        entry.CreateEntryRequest = (function() {

            /**
             * Properties of a CreateEntryRequest.
             * @memberof messages.entry
             * @interface ICreateEntryRequest
             * @property {string|null} [text] CreateEntryRequest text
             * @property {string|null} [creatorId] CreateEntryRequest creatorId
             * @property {string|null} [traceId] CreateEntryRequest traceId
             * @property {messages.entry.IRequestContext|null} [context] CreateEntryRequest context
             * @property {messages.entry.CreateEntryRequest.IPayload|null} [payload] CreateEntryRequest payload
             */

            /**
             * Constructs a new CreateEntryRequest.
             * @memberof messages.entry
             * @classdesc Represents a CreateEntryRequest.
             * @implements ICreateEntryRequest
             * @constructor
             * @param {messages.entry.ICreateEntryRequest=} [properties] Properties to set
             */
            function CreateEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateEntryRequest text.
             * @member {string} text
             * @memberof messages.entry.CreateEntryRequest
             * @instance
             */
            CreateEntryRequest.prototype.text = "";

            /**
             * CreateEntryRequest creatorId.
             * @member {string} creatorId
             * @memberof messages.entry.CreateEntryRequest
             * @instance
             */
            CreateEntryRequest.prototype.creatorId = "";

            /**
             * CreateEntryRequest traceId.
             * @member {string} traceId
             * @memberof messages.entry.CreateEntryRequest
             * @instance
             */
            CreateEntryRequest.prototype.traceId = "";

            /**
             * CreateEntryRequest context.
             * @member {messages.entry.IRequestContext|null|undefined} context
             * @memberof messages.entry.CreateEntryRequest
             * @instance
             */
            CreateEntryRequest.prototype.context = null;

            /**
             * CreateEntryRequest payload.
             * @member {messages.entry.CreateEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.entry.CreateEntryRequest
             * @instance
             */
            CreateEntryRequest.prototype.payload = null;

            /**
             * Creates a new CreateEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {messages.entry.ICreateEntryRequest=} [properties] Properties to set
             * @returns {messages.entry.CreateEntryRequest} CreateEntryRequest instance
             */
            CreateEntryRequest.create = function create(properties) {
                return new CreateEntryRequest(properties);
            };

            /**
             * Encodes the specified CreateEntryRequest message. Does not implicitly {@link messages.entry.CreateEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {messages.entry.ICreateEntryRequest} message CreateEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.text != null && message.hasOwnProperty("text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.creatorId);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.entry.RequestContext.encode(message.context, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.CreateEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CreateEntryRequest message, length delimited. Does not implicitly {@link messages.entry.CreateEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {messages.entry.ICreateEntryRequest} message CreateEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.CreateEntryRequest} CreateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.CreateEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.text = reader.string();
                        break;
                    case 2:
                        message.creatorId = reader.string();
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    case 4:
                        message.context = $root.messages.entry.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.payload = $root.messages.entry.CreateEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.CreateEntryRequest} CreateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateEntryRequest message.
             * @function verify
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                    if (!$util.isString(message.creatorId))
                        return "creatorId: string expected";
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.entry.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.CreateEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a CreateEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.CreateEntryRequest} CreateEntryRequest
             */
            CreateEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.CreateEntryRequest)
                    return object;
                var message = new $root.messages.entry.CreateEntryRequest();
                if (object.text != null)
                    message.text = String(object.text);
                if (object.creatorId != null)
                    message.creatorId = String(object.creatorId);
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.entry.CreateEntryRequest.context: object expected");
                    message.context = $root.messages.entry.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.CreateEntryRequest.payload: object expected");
                    message.payload = $root.messages.entry.CreateEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a CreateEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {messages.entry.CreateEntryRequest} message CreateEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.text = "";
                    object.creatorId = "";
                    object.traceId = "";
                    object.context = null;
                    object.payload = null;
                }
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                    object.creatorId = message.creatorId;
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.entry.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.CreateEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this CreateEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.entry.CreateEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            CreateEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.CreateEntryRequest
                 * @interface IPayload
                 * @property {string|null} [text] Payload text
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.CreateEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.CreateEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.CreateEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.CreateEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.CreateEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.CreateEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.CreateEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.CreateEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.CreateEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.CreateEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.text = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.CreateEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.CreateEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.CreateEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.entry.CreateEntryRequest.Payload();
                    if (object.text != null)
                        message.text = String(object.text);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.CreateEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.text = "";
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return CreateEntryRequest;
        })();

        entry.CreateEntryResponse = (function() {

            /**
             * Properties of a CreateEntryResponse.
             * @memberof messages.entry
             * @interface ICreateEntryResponse
             * @property {messages.entry.CreateEntryResponse.IPayload|null} [payload] CreateEntryResponse payload
             * @property {messages.entry.IError|null} [error] CreateEntryResponse error
             * @property {string|null} [traceId] CreateEntryResponse traceId
             */

            /**
             * Constructs a new CreateEntryResponse.
             * @memberof messages.entry
             * @classdesc Represents a CreateEntryResponse.
             * @implements ICreateEntryResponse
             * @constructor
             * @param {messages.entry.ICreateEntryResponse=} [properties] Properties to set
             */
            function CreateEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateEntryResponse payload.
             * @member {messages.entry.CreateEntryResponse.IPayload|null|undefined} payload
             * @memberof messages.entry.CreateEntryResponse
             * @instance
             */
            CreateEntryResponse.prototype.payload = null;

            /**
             * CreateEntryResponse error.
             * @member {messages.entry.IError|null|undefined} error
             * @memberof messages.entry.CreateEntryResponse
             * @instance
             */
            CreateEntryResponse.prototype.error = null;

            /**
             * CreateEntryResponse traceId.
             * @member {string} traceId
             * @memberof messages.entry.CreateEntryResponse
             * @instance
             */
            CreateEntryResponse.prototype.traceId = "";

            /**
             * Creates a new CreateEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {messages.entry.ICreateEntryResponse=} [properties] Properties to set
             * @returns {messages.entry.CreateEntryResponse} CreateEntryResponse instance
             */
            CreateEntryResponse.create = function create(properties) {
                return new CreateEntryResponse(properties);
            };

            /**
             * Encodes the specified CreateEntryResponse message. Does not implicitly {@link messages.entry.CreateEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {messages.entry.ICreateEntryResponse} message CreateEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.CreateEntryResponse.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.entry.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified CreateEntryResponse message, length delimited. Does not implicitly {@link messages.entry.CreateEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {messages.entry.ICreateEntryResponse} message CreateEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.CreateEntryResponse} CreateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.CreateEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.entry.CreateEntryResponse.Payload.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.error = $root.messages.entry.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.CreateEntryResponse} CreateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateEntryResponse message.
             * @function verify
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.CreateEntryResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.entry.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates a CreateEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.CreateEntryResponse} CreateEntryResponse
             */
            CreateEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.CreateEntryResponse)
                    return object;
                var message = new $root.messages.entry.CreateEntryResponse();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.CreateEntryResponse.payload: object expected");
                    message.payload = $root.messages.entry.CreateEntryResponse.Payload.fromObject(object.payload);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.entry.CreateEntryResponse.error: object expected");
                    message.error = $root.messages.entry.Error.fromObject(object.error);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from a CreateEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {messages.entry.CreateEntryResponse} message CreateEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.payload = null;
                    object.error = null;
                    object.traceId = "";
                }
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.CreateEntryResponse.Payload.toObject(message.payload, options);
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.entry.Error.toObject(message.error, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this CreateEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.entry.CreateEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            CreateEntryResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.CreateEntryResponse
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.CreateEntryResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.CreateEntryResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.CreateEntryResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.CreateEntryResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.CreateEntryResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.CreateEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.CreateEntryResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.CreateEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.CreateEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.CreateEntryResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.CreateEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.CreateEntryResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.CreateEntryResponse.Payload)
                        return object;
                    var message = new $root.messages.entry.CreateEntryResponse.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.CreateEntryResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return CreateEntryResponse;
        })();

        entry.UpdateEntryRequest = (function() {

            /**
             * Properties of an UpdateEntryRequest.
             * @memberof messages.entry
             * @interface IUpdateEntryRequest
             * @property {messages.entry.IRequestContext|null} [context] UpdateEntryRequest context
             * @property {messages.entry.UpdateEntryRequest.IPayload|null} [payload] UpdateEntryRequest payload
             */

            /**
             * Constructs a new UpdateEntryRequest.
             * @memberof messages.entry
             * @classdesc Represents an UpdateEntryRequest.
             * @implements IUpdateEntryRequest
             * @constructor
             * @param {messages.entry.IUpdateEntryRequest=} [properties] Properties to set
             */
            function UpdateEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateEntryRequest context.
             * @member {messages.entry.IRequestContext|null|undefined} context
             * @memberof messages.entry.UpdateEntryRequest
             * @instance
             */
            UpdateEntryRequest.prototype.context = null;

            /**
             * UpdateEntryRequest payload.
             * @member {messages.entry.UpdateEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.entry.UpdateEntryRequest
             * @instance
             */
            UpdateEntryRequest.prototype.payload = null;

            /**
             * Creates a new UpdateEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {messages.entry.IUpdateEntryRequest=} [properties] Properties to set
             * @returns {messages.entry.UpdateEntryRequest} UpdateEntryRequest instance
             */
            UpdateEntryRequest.create = function create(properties) {
                return new UpdateEntryRequest(properties);
            };

            /**
             * Encodes the specified UpdateEntryRequest message. Does not implicitly {@link messages.entry.UpdateEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {messages.entry.IUpdateEntryRequest} message UpdateEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.entry.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.UpdateEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UpdateEntryRequest message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {messages.entry.IUpdateEntryRequest} message UpdateEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.UpdateEntryRequest} UpdateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.UpdateEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.entry.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.entry.UpdateEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdateEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.UpdateEntryRequest} UpdateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateEntryRequest message.
             * @function verify
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.entry.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.UpdateEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates an UpdateEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.UpdateEntryRequest} UpdateEntryRequest
             */
            UpdateEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.UpdateEntryRequest)
                    return object;
                var message = new $root.messages.entry.UpdateEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.entry.UpdateEntryRequest.context: object expected");
                    message.context = $root.messages.entry.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.UpdateEntryRequest.payload: object expected");
                    message.payload = $root.messages.entry.UpdateEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from an UpdateEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {messages.entry.UpdateEntryRequest} message UpdateEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.entry.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.UpdateEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this UpdateEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.entry.UpdateEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UpdateEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.UpdateEntryRequest
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.UpdateEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.UpdateEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.UpdateEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.UpdateEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.UpdateEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.UpdateEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.UpdateEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.UpdateEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.UpdateEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.entry.UpdateEntryRequest.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return UpdateEntryRequest;
        })();

        entry.UpdateEntryResponse = (function() {

            /**
             * Properties of an UpdateEntryResponse.
             * @memberof messages.entry
             * @interface IUpdateEntryResponse
             * @property {messages.entry.UpdateEntryResponse.IPayload|null} [payload] UpdateEntryResponse payload
             * @property {messages.entry.IError|null} [error] UpdateEntryResponse error
             * @property {string|null} [traceId] UpdateEntryResponse traceId
             */

            /**
             * Constructs a new UpdateEntryResponse.
             * @memberof messages.entry
             * @classdesc Represents an UpdateEntryResponse.
             * @implements IUpdateEntryResponse
             * @constructor
             * @param {messages.entry.IUpdateEntryResponse=} [properties] Properties to set
             */
            function UpdateEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateEntryResponse payload.
             * @member {messages.entry.UpdateEntryResponse.IPayload|null|undefined} payload
             * @memberof messages.entry.UpdateEntryResponse
             * @instance
             */
            UpdateEntryResponse.prototype.payload = null;

            /**
             * UpdateEntryResponse error.
             * @member {messages.entry.IError|null|undefined} error
             * @memberof messages.entry.UpdateEntryResponse
             * @instance
             */
            UpdateEntryResponse.prototype.error = null;

            /**
             * UpdateEntryResponse traceId.
             * @member {string} traceId
             * @memberof messages.entry.UpdateEntryResponse
             * @instance
             */
            UpdateEntryResponse.prototype.traceId = "";

            /**
             * Creates a new UpdateEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {messages.entry.IUpdateEntryResponse=} [properties] Properties to set
             * @returns {messages.entry.UpdateEntryResponse} UpdateEntryResponse instance
             */
            UpdateEntryResponse.create = function create(properties) {
                return new UpdateEntryResponse(properties);
            };

            /**
             * Encodes the specified UpdateEntryResponse message. Does not implicitly {@link messages.entry.UpdateEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {messages.entry.IUpdateEntryResponse} message UpdateEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.UpdateEntryResponse.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.entry.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified UpdateEntryResponse message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {messages.entry.IUpdateEntryResponse} message UpdateEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.UpdateEntryResponse} UpdateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.UpdateEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.entry.UpdateEntryResponse.Payload.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.error = $root.messages.entry.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdateEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.UpdateEntryResponse} UpdateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateEntryResponse message.
             * @function verify
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.UpdateEntryResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.entry.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates an UpdateEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.UpdateEntryResponse} UpdateEntryResponse
             */
            UpdateEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.UpdateEntryResponse)
                    return object;
                var message = new $root.messages.entry.UpdateEntryResponse();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.UpdateEntryResponse.payload: object expected");
                    message.payload = $root.messages.entry.UpdateEntryResponse.Payload.fromObject(object.payload);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.entry.UpdateEntryResponse.error: object expected");
                    message.error = $root.messages.entry.Error.fromObject(object.error);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from an UpdateEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {messages.entry.UpdateEntryResponse} message UpdateEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.payload = null;
                    object.error = null;
                    object.traceId = "";
                }
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.UpdateEntryResponse.Payload.toObject(message.payload, options);
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.entry.Error.toObject(message.error, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this UpdateEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.entry.UpdateEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UpdateEntryResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.UpdateEntryResponse
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.UpdateEntryResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.UpdateEntryResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.UpdateEntryResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.UpdateEntryResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.UpdateEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.UpdateEntryResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.UpdateEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.UpdateEntryResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.UpdateEntryResponse.Payload)
                        return object;
                    var message = new $root.messages.entry.UpdateEntryResponse.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return UpdateEntryResponse;
        })();

        entry.ListEntriesRequest = (function() {

            /**
             * Properties of a ListEntriesRequest.
             * @memberof messages.entry
             * @interface IListEntriesRequest
             * @property {messages.entry.IRequestContext|null} [context] ListEntriesRequest context
             * @property {messages.entry.ListEntriesRequest.IPayload|null} [payload] ListEntriesRequest payload
             */

            /**
             * Constructs a new ListEntriesRequest.
             * @memberof messages.entry
             * @classdesc Represents a ListEntriesRequest.
             * @implements IListEntriesRequest
             * @constructor
             * @param {messages.entry.IListEntriesRequest=} [properties] Properties to set
             */
            function ListEntriesRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListEntriesRequest context.
             * @member {messages.entry.IRequestContext|null|undefined} context
             * @memberof messages.entry.ListEntriesRequest
             * @instance
             */
            ListEntriesRequest.prototype.context = null;

            /**
             * ListEntriesRequest payload.
             * @member {messages.entry.ListEntriesRequest.IPayload|null|undefined} payload
             * @memberof messages.entry.ListEntriesRequest
             * @instance
             */
            ListEntriesRequest.prototype.payload = null;

            /**
             * Creates a new ListEntriesRequest instance using the specified properties.
             * @function create
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {messages.entry.IListEntriesRequest=} [properties] Properties to set
             * @returns {messages.entry.ListEntriesRequest} ListEntriesRequest instance
             */
            ListEntriesRequest.create = function create(properties) {
                return new ListEntriesRequest(properties);
            };

            /**
             * Encodes the specified ListEntriesRequest message. Does not implicitly {@link messages.entry.ListEntriesRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {messages.entry.IListEntriesRequest} message ListEntriesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.entry.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.ListEntriesRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListEntriesRequest message, length delimited. Does not implicitly {@link messages.entry.ListEntriesRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {messages.entry.IListEntriesRequest} message ListEntriesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.ListEntriesRequest} ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.ListEntriesRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.entry.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.entry.ListEntriesRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.ListEntriesRequest} ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListEntriesRequest message.
             * @function verify
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListEntriesRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.entry.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.ListEntriesRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a ListEntriesRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.ListEntriesRequest} ListEntriesRequest
             */
            ListEntriesRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.ListEntriesRequest)
                    return object;
                var message = new $root.messages.entry.ListEntriesRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.entry.ListEntriesRequest.context: object expected");
                    message.context = $root.messages.entry.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.ListEntriesRequest.payload: object expected");
                    message.payload = $root.messages.entry.ListEntriesRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a ListEntriesRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {messages.entry.ListEntriesRequest} message ListEntriesRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListEntriesRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.entry.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.ListEntriesRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this ListEntriesRequest to JSON.
             * @function toJSON
             * @memberof messages.entry.ListEntriesRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListEntriesRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ListEntriesRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.ListEntriesRequest
                 * @interface IPayload
                 * @property {number|null} [first] Payload first
                 * @property {string|null} [after] Payload after
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.ListEntriesRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.ListEntriesRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload first.
                 * @member {number} first
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @instance
                 */
                Payload.prototype.first = 0;

                /**
                 * Payload after.
                 * @member {string} after
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @instance
                 */
                Payload.prototype.after = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.entry.ListEntriesRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.ListEntriesRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.ListEntriesRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.entry.ListEntriesRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.first != null && message.hasOwnProperty("first"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.first);
                    if (message.after != null && message.hasOwnProperty("after"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.after);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.ListEntriesRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.entry.ListEntriesRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.ListEntriesRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.ListEntriesRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.first = reader.int32();
                            break;
                        case 2:
                            message.after = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.ListEntriesRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.first != null && message.hasOwnProperty("first"))
                        if (!$util.isInteger(message.first))
                            return "first: integer expected";
                    if (message.after != null && message.hasOwnProperty("after"))
                        if (!$util.isString(message.after))
                            return "after: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.ListEntriesRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.ListEntriesRequest.Payload)
                        return object;
                    var message = new $root.messages.entry.ListEntriesRequest.Payload();
                    if (object.first != null)
                        message.first = object.first | 0;
                    if (object.after != null)
                        message.after = String(object.after);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.entry.ListEntriesRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.first = 0;
                        object.after = "";
                    }
                    if (message.first != null && message.hasOwnProperty("first"))
                        object.first = message.first;
                    if (message.after != null && message.hasOwnProperty("after"))
                        object.after = message.after;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ListEntriesRequest;
        })();

        entry.ListEntriesResponse = (function() {

            /**
             * Properties of a ListEntriesResponse.
             * @memberof messages.entry
             * @interface IListEntriesResponse
             * @property {Array.<messages.entry.ListEntriesResponse.IEntity>|null} [payload] ListEntriesResponse payload
             * @property {messages.entry.IError|null} [error] ListEntriesResponse error
             * @property {string|null} [traceId] ListEntriesResponse traceId
             * @property {messages.entry.ListEntriesResponse.IPageInfo|null} [pageInfo] ListEntriesResponse pageInfo
             */

            /**
             * Constructs a new ListEntriesResponse.
             * @memberof messages.entry
             * @classdesc Represents a ListEntriesResponse.
             * @implements IListEntriesResponse
             * @constructor
             * @param {messages.entry.IListEntriesResponse=} [properties] Properties to set
             */
            function ListEntriesResponse(properties) {
                this.payload = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListEntriesResponse payload.
             * @member {Array.<messages.entry.ListEntriesResponse.IEntity>} payload
             * @memberof messages.entry.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.payload = $util.emptyArray;

            /**
             * ListEntriesResponse error.
             * @member {messages.entry.IError|null|undefined} error
             * @memberof messages.entry.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.error = null;

            /**
             * ListEntriesResponse traceId.
             * @member {string} traceId
             * @memberof messages.entry.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.traceId = "";

            /**
             * ListEntriesResponse pageInfo.
             * @member {messages.entry.ListEntriesResponse.IPageInfo|null|undefined} pageInfo
             * @memberof messages.entry.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.pageInfo = null;

            /**
             * Creates a new ListEntriesResponse instance using the specified properties.
             * @function create
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {messages.entry.IListEntriesResponse=} [properties] Properties to set
             * @returns {messages.entry.ListEntriesResponse} ListEntriesResponse instance
             */
            ListEntriesResponse.create = function create(properties) {
                return new ListEntriesResponse(properties);
            };

            /**
             * Encodes the specified ListEntriesResponse message. Does not implicitly {@link messages.entry.ListEntriesResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {messages.entry.IListEntriesResponse} message ListEntriesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.payload.length)
                    for (var i = 0; i < message.payload.length; ++i)
                        $root.messages.entry.ListEntriesResponse.Entity.encode(message.payload[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.entry.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                    $root.messages.entry.ListEntriesResponse.PageInfo.encode(message.pageInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListEntriesResponse message, length delimited. Does not implicitly {@link messages.entry.ListEntriesResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {messages.entry.IListEntriesResponse} message ListEntriesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.ListEntriesResponse} ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.ListEntriesResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.payload && message.payload.length))
                            message.payload = [];
                        message.payload.push($root.messages.entry.ListEntriesResponse.Entity.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.error = $root.messages.entry.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    case 4:
                        message.pageInfo = $root.messages.entry.ListEntriesResponse.PageInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.ListEntriesResponse} ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListEntriesResponse message.
             * @function verify
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListEntriesResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    if (!Array.isArray(message.payload))
                        return "payload: array expected";
                    for (var i = 0; i < message.payload.length; ++i) {
                        var error = $root.messages.entry.ListEntriesResponse.Entity.verify(message.payload[i]);
                        if (error)
                            return "payload." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.entry.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                    var error = $root.messages.entry.ListEntriesResponse.PageInfo.verify(message.pageInfo);
                    if (error)
                        return "pageInfo." + error;
                }
                return null;
            };

            /**
             * Creates a ListEntriesResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.ListEntriesResponse} ListEntriesResponse
             */
            ListEntriesResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.ListEntriesResponse)
                    return object;
                var message = new $root.messages.entry.ListEntriesResponse();
                if (object.payload) {
                    if (!Array.isArray(object.payload))
                        throw TypeError(".messages.entry.ListEntriesResponse.payload: array expected");
                    message.payload = [];
                    for (var i = 0; i < object.payload.length; ++i) {
                        if (typeof object.payload[i] !== "object")
                            throw TypeError(".messages.entry.ListEntriesResponse.payload: object expected");
                        message.payload[i] = $root.messages.entry.ListEntriesResponse.Entity.fromObject(object.payload[i]);
                    }
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.entry.ListEntriesResponse.error: object expected");
                    message.error = $root.messages.entry.Error.fromObject(object.error);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                if (object.pageInfo != null) {
                    if (typeof object.pageInfo !== "object")
                        throw TypeError(".messages.entry.ListEntriesResponse.pageInfo: object expected");
                    message.pageInfo = $root.messages.entry.ListEntriesResponse.PageInfo.fromObject(object.pageInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from a ListEntriesResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {messages.entry.ListEntriesResponse} message ListEntriesResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListEntriesResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.payload = [];
                if (options.defaults) {
                    object.error = null;
                    object.traceId = "";
                    object.pageInfo = null;
                }
                if (message.payload && message.payload.length) {
                    object.payload = [];
                    for (var j = 0; j < message.payload.length; ++j)
                        object.payload[j] = $root.messages.entry.ListEntriesResponse.Entity.toObject(message.payload[j], options);
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.entry.Error.toObject(message.error, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                    object.pageInfo = $root.messages.entry.ListEntriesResponse.PageInfo.toObject(message.pageInfo, options);
                return object;
            };

            /**
             * Converts this ListEntriesResponse to JSON.
             * @function toJSON
             * @memberof messages.entry.ListEntriesResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListEntriesResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ListEntriesResponse.PageInfo = (function() {

                /**
                 * Properties of a PageInfo.
                 * @memberof messages.entry.ListEntriesResponse
                 * @interface IPageInfo
                 * @property {number|null} [totalCount] PageInfo totalCount
                 * @property {boolean|null} [hasNextPage] PageInfo hasNextPage
                 * @property {string|null} [startCursor] PageInfo startCursor
                 * @property {string|null} [endCursor] PageInfo endCursor
                 */

                /**
                 * Constructs a new PageInfo.
                 * @memberof messages.entry.ListEntriesResponse
                 * @classdesc Represents a PageInfo.
                 * @implements IPageInfo
                 * @constructor
                 * @param {messages.entry.ListEntriesResponse.IPageInfo=} [properties] Properties to set
                 */
                function PageInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PageInfo totalCount.
                 * @member {number} totalCount
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.totalCount = 0;

                /**
                 * PageInfo hasNextPage.
                 * @member {boolean} hasNextPage
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.hasNextPage = false;

                /**
                 * PageInfo startCursor.
                 * @member {string} startCursor
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.startCursor = "";

                /**
                 * PageInfo endCursor.
                 * @member {string} endCursor
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.endCursor = "";

                /**
                 * Creates a new PageInfo instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.entry.ListEntriesResponse.IPageInfo=} [properties] Properties to set
                 * @returns {messages.entry.ListEntriesResponse.PageInfo} PageInfo instance
                 */
                PageInfo.create = function create(properties) {
                    return new PageInfo(properties);
                };

                /**
                 * Encodes the specified PageInfo message. Does not implicitly {@link messages.entry.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.entry.ListEntriesResponse.IPageInfo} message PageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PageInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalCount);
                    if (message.hasNextPage != null && message.hasOwnProperty("hasNextPage"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasNextPage);
                    if (message.startCursor != null && message.hasOwnProperty("startCursor"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.startCursor);
                    if (message.endCursor != null && message.hasOwnProperty("endCursor"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.endCursor);
                    return writer;
                };

                /**
                 * Encodes the specified PageInfo message, length delimited. Does not implicitly {@link messages.entry.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.entry.ListEntriesResponse.IPageInfo} message PageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PageInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PageInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.ListEntriesResponse.PageInfo} PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PageInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.ListEntriesResponse.PageInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.totalCount = reader.int32();
                            break;
                        case 2:
                            message.hasNextPage = reader.bool();
                            break;
                        case 3:
                            message.startCursor = reader.string();
                            break;
                        case 4:
                            message.endCursor = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PageInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.ListEntriesResponse.PageInfo} PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PageInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PageInfo message.
                 * @function verify
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PageInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                        if (!$util.isInteger(message.totalCount))
                            return "totalCount: integer expected";
                    if (message.hasNextPage != null && message.hasOwnProperty("hasNextPage"))
                        if (typeof message.hasNextPage !== "boolean")
                            return "hasNextPage: boolean expected";
                    if (message.startCursor != null && message.hasOwnProperty("startCursor"))
                        if (!$util.isString(message.startCursor))
                            return "startCursor: string expected";
                    if (message.endCursor != null && message.hasOwnProperty("endCursor"))
                        if (!$util.isString(message.endCursor))
                            return "endCursor: string expected";
                    return null;
                };

                /**
                 * Creates a PageInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.ListEntriesResponse.PageInfo} PageInfo
                 */
                PageInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.ListEntriesResponse.PageInfo)
                        return object;
                    var message = new $root.messages.entry.ListEntriesResponse.PageInfo();
                    if (object.totalCount != null)
                        message.totalCount = object.totalCount | 0;
                    if (object.hasNextPage != null)
                        message.hasNextPage = Boolean(object.hasNextPage);
                    if (object.startCursor != null)
                        message.startCursor = String(object.startCursor);
                    if (object.endCursor != null)
                        message.endCursor = String(object.endCursor);
                    return message;
                };

                /**
                 * Creates a plain object from a PageInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.entry.ListEntriesResponse.PageInfo} message PageInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PageInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.totalCount = 0;
                        object.hasNextPage = false;
                        object.startCursor = "";
                        object.endCursor = "";
                    }
                    if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                        object.totalCount = message.totalCount;
                    if (message.hasNextPage != null && message.hasOwnProperty("hasNextPage"))
                        object.hasNextPage = message.hasNextPage;
                    if (message.startCursor != null && message.hasOwnProperty("startCursor"))
                        object.startCursor = message.startCursor;
                    if (message.endCursor != null && message.hasOwnProperty("endCursor"))
                        object.endCursor = message.endCursor;
                    return object;
                };

                /**
                 * Converts this PageInfo to JSON.
                 * @function toJSON
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PageInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PageInfo;
            })();

            ListEntriesResponse.Entity = (function() {

                /**
                 * Properties of an Entity.
                 * @memberof messages.entry.ListEntriesResponse
                 * @interface IEntity
                 * @property {string|null} [id] Entity id
                 * @property {string|null} [text] Entity text
                 * @property {string|null} [creatorId] Entity creatorId
                 */

                /**
                 * Constructs a new Entity.
                 * @memberof messages.entry.ListEntriesResponse
                 * @classdesc Represents an Entity.
                 * @implements IEntity
                 * @constructor
                 * @param {messages.entry.ListEntriesResponse.IEntity=} [properties] Properties to set
                 */
                function Entity(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Entity id.
                 * @member {string} id
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.id = "";

                /**
                 * Entity text.
                 * @member {string} text
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.text = "";

                /**
                 * Entity creatorId.
                 * @member {string} creatorId
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.creatorId = "";

                /**
                 * Creates a new Entity instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {messages.entry.ListEntriesResponse.IEntity=} [properties] Properties to set
                 * @returns {messages.entry.ListEntriesResponse.Entity} Entity instance
                 */
                Entity.create = function create(properties) {
                    return new Entity(properties);
                };

                /**
                 * Encodes the specified Entity message. Does not implicitly {@link messages.entry.ListEntriesResponse.Entity.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {messages.entry.ListEntriesResponse.IEntity} message Entity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Entity.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    return writer;
                };

                /**
                 * Encodes the specified Entity message, length delimited. Does not implicitly {@link messages.entry.ListEntriesResponse.Entity.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {messages.entry.ListEntriesResponse.IEntity} message Entity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Entity.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Entity message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.ListEntriesResponse.Entity} Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Entity.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.ListEntriesResponse.Entity();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Entity message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.ListEntriesResponse.Entity} Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Entity.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Entity message.
                 * @function verify
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Entity.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    return null;
                };

                /**
                 * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.ListEntriesResponse.Entity} Entity
                 */
                Entity.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.ListEntriesResponse.Entity)
                        return object;
                    var message = new $root.messages.entry.ListEntriesResponse.Entity();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    return message;
                };

                /**
                 * Creates a plain object from an Entity message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {messages.entry.ListEntriesResponse.Entity} message Entity
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Entity.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    return object;
                };

                /**
                 * Converts this Entity to JSON.
                 * @function toJSON
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Entity.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Entity;
            })();

            return ListEntriesResponse;
        })();

        entry.DeleteEntryRequest = (function() {

            /**
             * Properties of a DeleteEntryRequest.
             * @memberof messages.entry
             * @interface IDeleteEntryRequest
             * @property {messages.entry.IRequestContext|null} [context] DeleteEntryRequest context
             * @property {messages.entry.DeleteEntryRequest.IPayload|null} [payload] DeleteEntryRequest payload
             */

            /**
             * Constructs a new DeleteEntryRequest.
             * @memberof messages.entry
             * @classdesc Represents a DeleteEntryRequest.
             * @implements IDeleteEntryRequest
             * @constructor
             * @param {messages.entry.IDeleteEntryRequest=} [properties] Properties to set
             */
            function DeleteEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeleteEntryRequest context.
             * @member {messages.entry.IRequestContext|null|undefined} context
             * @memberof messages.entry.DeleteEntryRequest
             * @instance
             */
            DeleteEntryRequest.prototype.context = null;

            /**
             * DeleteEntryRequest payload.
             * @member {messages.entry.DeleteEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.entry.DeleteEntryRequest
             * @instance
             */
            DeleteEntryRequest.prototype.payload = null;

            /**
             * Creates a new DeleteEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {messages.entry.IDeleteEntryRequest=} [properties] Properties to set
             * @returns {messages.entry.DeleteEntryRequest} DeleteEntryRequest instance
             */
            DeleteEntryRequest.create = function create(properties) {
                return new DeleteEntryRequest(properties);
            };

            /**
             * Encodes the specified DeleteEntryRequest message. Does not implicitly {@link messages.entry.DeleteEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {messages.entry.IDeleteEntryRequest} message DeleteEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.entry.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.DeleteEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DeleteEntryRequest message, length delimited. Does not implicitly {@link messages.entry.DeleteEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {messages.entry.IDeleteEntryRequest} message DeleteEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.DeleteEntryRequest} DeleteEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.DeleteEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.entry.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.entry.DeleteEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeleteEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.DeleteEntryRequest} DeleteEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteEntryRequest message.
             * @function verify
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.entry.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.DeleteEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a DeleteEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.DeleteEntryRequest} DeleteEntryRequest
             */
            DeleteEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.DeleteEntryRequest)
                    return object;
                var message = new $root.messages.entry.DeleteEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.entry.DeleteEntryRequest.context: object expected");
                    message.context = $root.messages.entry.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.DeleteEntryRequest.payload: object expected");
                    message.payload = $root.messages.entry.DeleteEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a DeleteEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {messages.entry.DeleteEntryRequest} message DeleteEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.entry.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.DeleteEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this DeleteEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.entry.DeleteEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DeleteEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.DeleteEntryRequest
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.DeleteEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.DeleteEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {messages.entry.DeleteEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.DeleteEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.DeleteEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {messages.entry.DeleteEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.DeleteEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {messages.entry.DeleteEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.DeleteEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.DeleteEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.DeleteEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.DeleteEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.DeleteEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.entry.DeleteEntryRequest.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {messages.entry.DeleteEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return DeleteEntryRequest;
        })();

        entry.DeleteEntryResponse = (function() {

            /**
             * Properties of a DeleteEntryResponse.
             * @memberof messages.entry
             * @interface IDeleteEntryResponse
             * @property {messages.entry.IError|null} [error] DeleteEntryResponse error
             * @property {string|null} [traceId] DeleteEntryResponse traceId
             */

            /**
             * Constructs a new DeleteEntryResponse.
             * @memberof messages.entry
             * @classdesc Represents a DeleteEntryResponse.
             * @implements IDeleteEntryResponse
             * @constructor
             * @param {messages.entry.IDeleteEntryResponse=} [properties] Properties to set
             */
            function DeleteEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeleteEntryResponse error.
             * @member {messages.entry.IError|null|undefined} error
             * @memberof messages.entry.DeleteEntryResponse
             * @instance
             */
            DeleteEntryResponse.prototype.error = null;

            /**
             * DeleteEntryResponse traceId.
             * @member {string} traceId
             * @memberof messages.entry.DeleteEntryResponse
             * @instance
             */
            DeleteEntryResponse.prototype.traceId = "";

            /**
             * Creates a new DeleteEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {messages.entry.IDeleteEntryResponse=} [properties] Properties to set
             * @returns {messages.entry.DeleteEntryResponse} DeleteEntryResponse instance
             */
            DeleteEntryResponse.create = function create(properties) {
                return new DeleteEntryResponse(properties);
            };

            /**
             * Encodes the specified DeleteEntryResponse message. Does not implicitly {@link messages.entry.DeleteEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {messages.entry.IDeleteEntryResponse} message DeleteEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.entry.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified DeleteEntryResponse message, length delimited. Does not implicitly {@link messages.entry.DeleteEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {messages.entry.IDeleteEntryResponse} message DeleteEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.DeleteEntryResponse} DeleteEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.DeleteEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.messages.entry.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeleteEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.DeleteEntryResponse} DeleteEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteEntryResponse message.
             * @function verify
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.entry.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates a DeleteEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.DeleteEntryResponse} DeleteEntryResponse
             */
            DeleteEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.DeleteEntryResponse)
                    return object;
                var message = new $root.messages.entry.DeleteEntryResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.entry.DeleteEntryResponse.error: object expected");
                    message.error = $root.messages.entry.Error.fromObject(object.error);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from a DeleteEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {messages.entry.DeleteEntryResponse} message DeleteEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.traceId = "";
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.entry.Error.toObject(message.error, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this DeleteEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.entry.DeleteEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeleteEntryResponse;
        })();

        entry.InfoEntry = (function() {

            /**
             * Properties of an InfoEntry.
             * @memberof messages.entry
             * @interface IInfoEntry
             * @property {messages.entry.InfoEntry.IPayload|null} [payload] InfoEntry payload
             * @property {string|null} [traceId] InfoEntry traceId
             */

            /**
             * Constructs a new InfoEntry.
             * @memberof messages.entry
             * @classdesc Represents an InfoEntry.
             * @implements IInfoEntry
             * @constructor
             * @param {messages.entry.IInfoEntry=} [properties] Properties to set
             */
            function InfoEntry(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InfoEntry payload.
             * @member {messages.entry.InfoEntry.IPayload|null|undefined} payload
             * @memberof messages.entry.InfoEntry
             * @instance
             */
            InfoEntry.prototype.payload = null;

            /**
             * InfoEntry traceId.
             * @member {string} traceId
             * @memberof messages.entry.InfoEntry
             * @instance
             */
            InfoEntry.prototype.traceId = "";

            /**
             * Creates a new InfoEntry instance using the specified properties.
             * @function create
             * @memberof messages.entry.InfoEntry
             * @static
             * @param {messages.entry.IInfoEntry=} [properties] Properties to set
             * @returns {messages.entry.InfoEntry} InfoEntry instance
             */
            InfoEntry.create = function create(properties) {
                return new InfoEntry(properties);
            };

            /**
             * Encodes the specified InfoEntry message. Does not implicitly {@link messages.entry.InfoEntry.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.InfoEntry
             * @static
             * @param {messages.entry.IInfoEntry} message InfoEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntry.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.InfoEntry.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified InfoEntry message, length delimited. Does not implicitly {@link messages.entry.InfoEntry.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.InfoEntry
             * @static
             * @param {messages.entry.IInfoEntry} message InfoEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntry.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InfoEntry message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.InfoEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.InfoEntry} InfoEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntry.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.InfoEntry();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.entry.InfoEntry.Payload.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InfoEntry message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.InfoEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.InfoEntry} InfoEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntry.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InfoEntry message.
             * @function verify
             * @memberof messages.entry.InfoEntry
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InfoEntry.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.InfoEntry.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates an InfoEntry message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.InfoEntry
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.InfoEntry} InfoEntry
             */
            InfoEntry.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.InfoEntry)
                    return object;
                var message = new $root.messages.entry.InfoEntry();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.InfoEntry.payload: object expected");
                    message.payload = $root.messages.entry.InfoEntry.Payload.fromObject(object.payload);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from an InfoEntry message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.InfoEntry
             * @static
             * @param {messages.entry.InfoEntry} message InfoEntry
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InfoEntry.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.payload = null;
                    object.traceId = "";
                }
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.InfoEntry.Payload.toObject(message.payload, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this InfoEntry to JSON.
             * @function toJSON
             * @memberof messages.entry.InfoEntry
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InfoEntry.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InfoEntry.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.InfoEntry
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.InfoEntry
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.InfoEntry.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.InfoEntry.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.entry.InfoEntry.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.InfoEntry.Payload
                 * @static
                 * @param {messages.entry.InfoEntry.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.InfoEntry.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.InfoEntry.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.InfoEntry.Payload
                 * @static
                 * @param {messages.entry.InfoEntry.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.InfoEntry.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.InfoEntry.Payload
                 * @static
                 * @param {messages.entry.InfoEntry.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.InfoEntry.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.InfoEntry.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.InfoEntry.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.InfoEntry.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.InfoEntry.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.InfoEntry.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.InfoEntry.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.InfoEntry.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.InfoEntry.Payload)
                        return object;
                    var message = new $root.messages.entry.InfoEntry.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.InfoEntry.Payload
                 * @static
                 * @param {messages.entry.InfoEntry.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.InfoEntry.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return InfoEntry;
        })();

        return entry;
    })();

    messages.error = (function() {

        /**
         * Namespace error.
         * @memberof messages
         * @namespace
         */
        var error = {};

        error.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof messages.error
             * @interface IError
             * @property {messages.error.Error.Code|null} [code] Error code
             * @property {string|null} [message] Error message
             */

            /**
             * Constructs a new Error.
             * @memberof messages.error
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {messages.error.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error code.
             * @member {messages.error.Error.Code} code
             * @memberof messages.error.Error
             * @instance
             */
            Error.prototype.code = 0;

            /**
             * Error message.
             * @member {string} message
             * @memberof messages.error.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof messages.error.Error
             * @static
             * @param {messages.error.IError=} [properties] Properties to set
             * @returns {messages.error.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link messages.error.Error.verify|verify} messages.
             * @function encode
             * @memberof messages.error.Error
             * @static
             * @param {messages.error.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link messages.error.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.error.Error
             * @static
             * @param {messages.error.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof messages.error.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.error.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.error.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.error.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.error.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof messages.error.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    switch (message.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                        break;
                    }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.error.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.error.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.error.Error)
                    return object;
                var message = new $root.messages.error.Error();
                switch (object.code) {
                case "UNKNOWN":
                case 0:
                    message.code = 0;
                    break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.error.Error
             * @static
             * @param {messages.error.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = options.enums === String ? "UNKNOWN" : 0;
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = options.enums === String ? $root.messages.error.Error.Code[message.code] : message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof messages.error.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Code enum.
             * @name messages.error.Error.Code
             * @enum {string}
             * @property {number} UNKNOWN=0 UNKNOWN value
             */
            Error.Code = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                return values;
            })();

            return Error;
        })();

        return error;
    })();

    return messages;
})();

module.exports = $root;
