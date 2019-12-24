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
             */
            Error.Code = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                return values;
            })();

            return Error;
        })();

        entry.GetEntryRequest = (function() {

            /**
             * Properties of a GetEntryRequest.
             * @memberof messages.entry
             * @interface IGetEntryRequest
             * @property {string|null} [id] GetEntryRequest id
             * @property {string|null} [creatorId] GetEntryRequest creatorId
             * @property {string|null} [traceId] GetEntryRequest traceId
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
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                    object.creatorId = message.creatorId;
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
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
                }
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                    object.creatorId = message.creatorId;
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
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
