import * as $protobuf from "protobufjs";
/** Namespace messages. */
export namespace messages {

    /** Namespace entry. */
    namespace entry {

        /** Properties of an Error. */
        interface IError {

            /** Error code */
            code?: (messages.entry.Error.Code|null);

            /** Error message */
            message?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IError);

            /** Error code. */
            public code: messages.entry.Error.Code;

            /** Error message. */
            public message: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: messages.entry.IError): messages.entry.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link messages.entry.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link messages.entry.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Error {

            /** Code enum. */
            enum Code {
                UNKNOWN = 0,
                NOT_FOUND = 1,
                VALIDATION_FAILED = 2
            }
        }

        /** Properties of a Principal. */
        interface IPrincipal {

            /** Principal type */
            type?: (messages.entry.Principal.Type|null);

            /** Principal id */
            id?: (string|null);
        }

        /** Represents a Principal. */
        class Principal implements IPrincipal {

            /**
             * Constructs a new Principal.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IPrincipal);

            /** Principal type. */
            public type: messages.entry.Principal.Type;

            /** Principal id. */
            public id: string;

            /**
             * Creates a new Principal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Principal instance
             */
            public static create(properties?: messages.entry.IPrincipal): messages.entry.Principal;

            /**
             * Encodes the specified Principal message. Does not implicitly {@link messages.entry.Principal.verify|verify} messages.
             * @param message Principal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IPrincipal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Principal message, length delimited. Does not implicitly {@link messages.entry.Principal.verify|verify} messages.
             * @param message Principal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IPrincipal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Principal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.Principal;

            /**
             * Decodes a Principal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.Principal;

            /**
             * Verifies a Principal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Principal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Principal
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.Principal;

            /**
             * Creates a plain object from a Principal message. Also converts values to other types if specified.
             * @param message Principal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.Principal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Principal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Principal {

            /** Type enum. */
            enum Type {
                USER = 0
            }
        }

        /** Properties of a RequestContext. */
        interface IRequestContext {

            /** RequestContext traceId */
            traceId?: (string|null);

            /** RequestContext principal */
            principal?: (messages.entry.IPrincipal|null);
        }

        /** Represents a RequestContext. */
        class RequestContext implements IRequestContext {

            /**
             * Constructs a new RequestContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IRequestContext);

            /** RequestContext traceId. */
            public traceId: string;

            /** RequestContext principal. */
            public principal?: (messages.entry.IPrincipal|null);

            /**
             * Creates a new RequestContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestContext instance
             */
            public static create(properties?: messages.entry.IRequestContext): messages.entry.RequestContext;

            /**
             * Encodes the specified RequestContext message. Does not implicitly {@link messages.entry.RequestContext.verify|verify} messages.
             * @param message RequestContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IRequestContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestContext message, length delimited. Does not implicitly {@link messages.entry.RequestContext.verify|verify} messages.
             * @param message RequestContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IRequestContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.RequestContext;

            /**
             * Decodes a RequestContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.RequestContext;

            /**
             * Verifies a RequestContext message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestContext message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestContext
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.RequestContext;

            /**
             * Creates a plain object from a RequestContext message. Also converts values to other types if specified.
             * @param message RequestContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.RequestContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetEntryRequest. */
        interface IGetEntryRequest {

            /** GetEntryRequest context */
            context?: (messages.entry.IRequestContext|null);

            /** GetEntryRequest payload */
            payload?: (messages.entry.GetEntryRequest.IPayload|null);
        }

        /** Represents a GetEntryRequest. */
        class GetEntryRequest implements IGetEntryRequest {

            /**
             * Constructs a new GetEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IGetEntryRequest);

            /** GetEntryRequest context. */
            public context?: (messages.entry.IRequestContext|null);

            /** GetEntryRequest payload. */
            public payload?: (messages.entry.GetEntryRequest.IPayload|null);

            /**
             * Creates a new GetEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetEntryRequest instance
             */
            public static create(properties?: messages.entry.IGetEntryRequest): messages.entry.GetEntryRequest;

            /**
             * Encodes the specified GetEntryRequest message. Does not implicitly {@link messages.entry.GetEntryRequest.verify|verify} messages.
             * @param message GetEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IGetEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetEntryRequest message, length delimited. Does not implicitly {@link messages.entry.GetEntryRequest.verify|verify} messages.
             * @param message GetEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IGetEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.GetEntryRequest;

            /**
             * Decodes a GetEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.GetEntryRequest;

            /**
             * Verifies a GetEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.GetEntryRequest;

            /**
             * Creates a plain object from a GetEntryRequest message. Also converts values to other types if specified.
             * @param message GetEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.GetEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GetEntryRequest {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.GetEntryRequest.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.GetEntryRequest.IPayload): messages.entry.GetEntryRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.GetEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.GetEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.GetEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.GetEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.GetEntryRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.GetEntryRequest.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.GetEntryRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.GetEntryRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GetEntryResponse. */
        interface IGetEntryResponse {

            /** GetEntryResponse payload */
            payload?: (messages.entry.GetEntryResponse.IPayload|null);

            /** GetEntryResponse error */
            error?: (messages.entry.IError|null);

            /** GetEntryResponse traceId */
            traceId?: (string|null);
        }

        /** Represents a GetEntryResponse. */
        class GetEntryResponse implements IGetEntryResponse {

            /**
             * Constructs a new GetEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IGetEntryResponse);

            /** GetEntryResponse payload. */
            public payload?: (messages.entry.GetEntryResponse.IPayload|null);

            /** GetEntryResponse error. */
            public error?: (messages.entry.IError|null);

            /** GetEntryResponse traceId. */
            public traceId: string;

            /**
             * Creates a new GetEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetEntryResponse instance
             */
            public static create(properties?: messages.entry.IGetEntryResponse): messages.entry.GetEntryResponse;

            /**
             * Encodes the specified GetEntryResponse message. Does not implicitly {@link messages.entry.GetEntryResponse.verify|verify} messages.
             * @param message GetEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IGetEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetEntryResponse message, length delimited. Does not implicitly {@link messages.entry.GetEntryResponse.verify|verify} messages.
             * @param message GetEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IGetEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.GetEntryResponse;

            /**
             * Decodes a GetEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.GetEntryResponse;

            /**
             * Verifies a GetEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.GetEntryResponse;

            /**
             * Creates a plain object from a GetEntryResponse message. Also converts values to other types if specified.
             * @param message GetEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.GetEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GetEntryResponse {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);

                /** Payload text */
                text?: (string|null);

                /** Payload creatorId */
                creatorId?: (string|null);

                /** Payload createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.GetEntryResponse.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /** Payload creatorId. */
                public creatorId: string;

                /** Payload createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.GetEntryResponse.IPayload): messages.entry.GetEntryResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.GetEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.GetEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.GetEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.GetEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.GetEntryResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.GetEntryResponse.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.GetEntryResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.GetEntryResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a CreateEntryRequest. */
        interface ICreateEntryRequest {

            /** CreateEntryRequest context */
            context?: (messages.entry.IRequestContext|null);

            /** CreateEntryRequest payload */
            payload?: (messages.entry.CreateEntryRequest.IPayload|null);
        }

        /** Represents a CreateEntryRequest. */
        class CreateEntryRequest implements ICreateEntryRequest {

            /**
             * Constructs a new CreateEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.ICreateEntryRequest);

            /** CreateEntryRequest context. */
            public context?: (messages.entry.IRequestContext|null);

            /** CreateEntryRequest payload. */
            public payload?: (messages.entry.CreateEntryRequest.IPayload|null);

            /**
             * Creates a new CreateEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateEntryRequest instance
             */
            public static create(properties?: messages.entry.ICreateEntryRequest): messages.entry.CreateEntryRequest;

            /**
             * Encodes the specified CreateEntryRequest message. Does not implicitly {@link messages.entry.CreateEntryRequest.verify|verify} messages.
             * @param message CreateEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.ICreateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateEntryRequest message, length delimited. Does not implicitly {@link messages.entry.CreateEntryRequest.verify|verify} messages.
             * @param message CreateEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.ICreateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.CreateEntryRequest;

            /**
             * Decodes a CreateEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.CreateEntryRequest;

            /**
             * Verifies a CreateEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.CreateEntryRequest;

            /**
             * Creates a plain object from a CreateEntryRequest message. Also converts values to other types if specified.
             * @param message CreateEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.CreateEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CreateEntryRequest {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload text */
                text?: (string|null);

                /** Payload creatorId */
                creatorId?: (string|null);

                /** Payload createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.CreateEntryRequest.IPayload);

                /** Payload text. */
                public text: string;

                /** Payload creatorId. */
                public creatorId: string;

                /** Payload createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.CreateEntryRequest.IPayload): messages.entry.CreateEntryRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.CreateEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.CreateEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.CreateEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.CreateEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.CreateEntryRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.CreateEntryRequest.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.CreateEntryRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.CreateEntryRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a CreateEntryResponse. */
        interface ICreateEntryResponse {

            /** CreateEntryResponse payload */
            payload?: (messages.entry.CreateEntryResponse.IPayload|null);

            /** CreateEntryResponse error */
            error?: (messages.entry.IError|null);

            /** CreateEntryResponse traceId */
            traceId?: (string|null);
        }

        /** Represents a CreateEntryResponse. */
        class CreateEntryResponse implements ICreateEntryResponse {

            /**
             * Constructs a new CreateEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.ICreateEntryResponse);

            /** CreateEntryResponse payload. */
            public payload?: (messages.entry.CreateEntryResponse.IPayload|null);

            /** CreateEntryResponse error. */
            public error?: (messages.entry.IError|null);

            /** CreateEntryResponse traceId. */
            public traceId: string;

            /**
             * Creates a new CreateEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateEntryResponse instance
             */
            public static create(properties?: messages.entry.ICreateEntryResponse): messages.entry.CreateEntryResponse;

            /**
             * Encodes the specified CreateEntryResponse message. Does not implicitly {@link messages.entry.CreateEntryResponse.verify|verify} messages.
             * @param message CreateEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.ICreateEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateEntryResponse message, length delimited. Does not implicitly {@link messages.entry.CreateEntryResponse.verify|verify} messages.
             * @param message CreateEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.ICreateEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.CreateEntryResponse;

            /**
             * Decodes a CreateEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.CreateEntryResponse;

            /**
             * Verifies a CreateEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.CreateEntryResponse;

            /**
             * Creates a plain object from a CreateEntryResponse message. Also converts values to other types if specified.
             * @param message CreateEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.CreateEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CreateEntryResponse {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.CreateEntryResponse.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.CreateEntryResponse.IPayload): messages.entry.CreateEntryResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.CreateEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.CreateEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.CreateEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.CreateEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.CreateEntryResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.CreateEntryResponse.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.CreateEntryResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.CreateEntryResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an UpdateEntryRequest. */
        interface IUpdateEntryRequest {

            /** UpdateEntryRequest context */
            context?: (messages.entry.IRequestContext|null);

            /** UpdateEntryRequest payload */
            payload?: (messages.entry.UpdateEntryRequest.IPayload|null);
        }

        /** Represents an UpdateEntryRequest. */
        class UpdateEntryRequest implements IUpdateEntryRequest {

            /**
             * Constructs a new UpdateEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IUpdateEntryRequest);

            /** UpdateEntryRequest context. */
            public context?: (messages.entry.IRequestContext|null);

            /** UpdateEntryRequest payload. */
            public payload?: (messages.entry.UpdateEntryRequest.IPayload|null);

            /**
             * Creates a new UpdateEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateEntryRequest instance
             */
            public static create(properties?: messages.entry.IUpdateEntryRequest): messages.entry.UpdateEntryRequest;

            /**
             * Encodes the specified UpdateEntryRequest message. Does not implicitly {@link messages.entry.UpdateEntryRequest.verify|verify} messages.
             * @param message UpdateEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IUpdateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateEntryRequest message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryRequest.verify|verify} messages.
             * @param message UpdateEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IUpdateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.UpdateEntryRequest;

            /**
             * Decodes an UpdateEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.UpdateEntryRequest;

            /**
             * Verifies an UpdateEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.UpdateEntryRequest;

            /**
             * Creates a plain object from an UpdateEntryRequest message. Also converts values to other types if specified.
             * @param message UpdateEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.UpdateEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UpdateEntryRequest {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);

                /** Payload text */
                text?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.UpdateEntryRequest.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.UpdateEntryRequest.IPayload): messages.entry.UpdateEntryRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.UpdateEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.UpdateEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.UpdateEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.UpdateEntryRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.UpdateEntryRequest.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.UpdateEntryRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.UpdateEntryRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an UpdateEntryResponse. */
        interface IUpdateEntryResponse {

            /** UpdateEntryResponse payload */
            payload?: (messages.entry.UpdateEntryResponse.IPayload|null);

            /** UpdateEntryResponse error */
            error?: (messages.entry.IError|null);

            /** UpdateEntryResponse traceId */
            traceId?: (string|null);
        }

        /** Represents an UpdateEntryResponse. */
        class UpdateEntryResponse implements IUpdateEntryResponse {

            /**
             * Constructs a new UpdateEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IUpdateEntryResponse);

            /** UpdateEntryResponse payload. */
            public payload?: (messages.entry.UpdateEntryResponse.IPayload|null);

            /** UpdateEntryResponse error. */
            public error?: (messages.entry.IError|null);

            /** UpdateEntryResponse traceId. */
            public traceId: string;

            /**
             * Creates a new UpdateEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateEntryResponse instance
             */
            public static create(properties?: messages.entry.IUpdateEntryResponse): messages.entry.UpdateEntryResponse;

            /**
             * Encodes the specified UpdateEntryResponse message. Does not implicitly {@link messages.entry.UpdateEntryResponse.verify|verify} messages.
             * @param message UpdateEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IUpdateEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateEntryResponse message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryResponse.verify|verify} messages.
             * @param message UpdateEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IUpdateEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.UpdateEntryResponse;

            /**
             * Decodes an UpdateEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.UpdateEntryResponse;

            /**
             * Verifies an UpdateEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.UpdateEntryResponse;

            /**
             * Creates a plain object from an UpdateEntryResponse message. Also converts values to other types if specified.
             * @param message UpdateEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.UpdateEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UpdateEntryResponse {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);

                /** Payload text */
                text?: (string|null);

                /** Payload creatorId */
                creatorId?: (string|null);

                /** Payload createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.UpdateEntryResponse.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /** Payload creatorId. */
                public creatorId: string;

                /** Payload createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.UpdateEntryResponse.IPayload): messages.entry.UpdateEntryResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.UpdateEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.UpdateEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.UpdateEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.UpdateEntryResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.UpdateEntryResponse.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.UpdateEntryResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.UpdateEntryResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a ListEntriesRequest. */
        interface IListEntriesRequest {

            /** ListEntriesRequest context */
            context?: (messages.entry.IRequestContext|null);

            /** ListEntriesRequest payload */
            payload?: (messages.entry.ListEntriesRequest.IPayload|null);
        }

        /** Represents a ListEntriesRequest. */
        class ListEntriesRequest implements IListEntriesRequest {

            /**
             * Constructs a new ListEntriesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IListEntriesRequest);

            /** ListEntriesRequest context. */
            public context?: (messages.entry.IRequestContext|null);

            /** ListEntriesRequest payload. */
            public payload?: (messages.entry.ListEntriesRequest.IPayload|null);

            /**
             * Creates a new ListEntriesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListEntriesRequest instance
             */
            public static create(properties?: messages.entry.IListEntriesRequest): messages.entry.ListEntriesRequest;

            /**
             * Encodes the specified ListEntriesRequest message. Does not implicitly {@link messages.entry.ListEntriesRequest.verify|verify} messages.
             * @param message ListEntriesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IListEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListEntriesRequest message, length delimited. Does not implicitly {@link messages.entry.ListEntriesRequest.verify|verify} messages.
             * @param message ListEntriesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IListEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.ListEntriesRequest;

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.ListEntriesRequest;

            /**
             * Verifies a ListEntriesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListEntriesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListEntriesRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.ListEntriesRequest;

            /**
             * Creates a plain object from a ListEntriesRequest message. Also converts values to other types if specified.
             * @param message ListEntriesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.ListEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListEntriesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ListEntriesRequest {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload first */
                first?: (number|null);

                /** Payload after */
                after?: (string|null);

                /** Payload creatorId */
                creatorId?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.ListEntriesRequest.IPayload);

                /** Payload first. */
                public first: number;

                /** Payload after. */
                public after: string;

                /** Payload creatorId. */
                public creatorId: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.ListEntriesRequest.IPayload): messages.entry.ListEntriesRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.ListEntriesRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.ListEntriesRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.ListEntriesRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.ListEntriesRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.ListEntriesRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.ListEntriesRequest.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.ListEntriesRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.ListEntriesRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a ListEntriesResponse. */
        interface IListEntriesResponse {

            /** ListEntriesResponse payload */
            payload?: (messages.entry.ListEntriesResponse.IEntity[]|null);

            /** ListEntriesResponse error */
            error?: (messages.entry.IError|null);

            /** ListEntriesResponse traceId */
            traceId?: (string|null);

            /** ListEntriesResponse pageInfo */
            pageInfo?: (messages.entry.ListEntriesResponse.IPageInfo|null);
        }

        /** Represents a ListEntriesResponse. */
        class ListEntriesResponse implements IListEntriesResponse {

            /**
             * Constructs a new ListEntriesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IListEntriesResponse);

            /** ListEntriesResponse payload. */
            public payload: messages.entry.ListEntriesResponse.IEntity[];

            /** ListEntriesResponse error. */
            public error?: (messages.entry.IError|null);

            /** ListEntriesResponse traceId. */
            public traceId: string;

            /** ListEntriesResponse pageInfo. */
            public pageInfo?: (messages.entry.ListEntriesResponse.IPageInfo|null);

            /**
             * Creates a new ListEntriesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListEntriesResponse instance
             */
            public static create(properties?: messages.entry.IListEntriesResponse): messages.entry.ListEntriesResponse;

            /**
             * Encodes the specified ListEntriesResponse message. Does not implicitly {@link messages.entry.ListEntriesResponse.verify|verify} messages.
             * @param message ListEntriesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IListEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListEntriesResponse message, length delimited. Does not implicitly {@link messages.entry.ListEntriesResponse.verify|verify} messages.
             * @param message ListEntriesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IListEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.ListEntriesResponse;

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.ListEntriesResponse;

            /**
             * Verifies a ListEntriesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListEntriesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListEntriesResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.ListEntriesResponse;

            /**
             * Creates a plain object from a ListEntriesResponse message. Also converts values to other types if specified.
             * @param message ListEntriesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.ListEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListEntriesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ListEntriesResponse {

            /** Properties of a PageInfo. */
            interface IPageInfo {

                /** PageInfo totalCount */
                totalCount?: (number|null);

                /** PageInfo hasNextPage */
                hasNextPage?: (boolean|null);

                /** PageInfo startCursor */
                startCursor?: (string|null);

                /** PageInfo endCursor */
                endCursor?: (string|null);
            }

            /** Represents a PageInfo. */
            class PageInfo implements IPageInfo {

                /**
                 * Constructs a new PageInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.ListEntriesResponse.IPageInfo);

                /** PageInfo totalCount. */
                public totalCount: number;

                /** PageInfo hasNextPage. */
                public hasNextPage: boolean;

                /** PageInfo startCursor. */
                public startCursor: string;

                /** PageInfo endCursor. */
                public endCursor: string;

                /**
                 * Creates a new PageInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PageInfo instance
                 */
                public static create(properties?: messages.entry.ListEntriesResponse.IPageInfo): messages.entry.ListEntriesResponse.PageInfo;

                /**
                 * Encodes the specified PageInfo message. Does not implicitly {@link messages.entry.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @param message PageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.ListEntriesResponse.IPageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PageInfo message, length delimited. Does not implicitly {@link messages.entry.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @param message PageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.ListEntriesResponse.IPageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PageInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.ListEntriesResponse.PageInfo;

                /**
                 * Decodes a PageInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.ListEntriesResponse.PageInfo;

                /**
                 * Verifies a PageInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PageInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PageInfo
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.ListEntriesResponse.PageInfo;

                /**
                 * Creates a plain object from a PageInfo message. Also converts values to other types if specified.
                 * @param message PageInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.ListEntriesResponse.PageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PageInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Entity. */
            interface IEntity {

                /** Entity id */
                id?: (string|null);

                /** Entity text */
                text?: (string|null);

                /** Entity creatorId */
                creatorId?: (string|null);

                /** Entity createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Entity updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents an Entity. */
            class Entity implements IEntity {

                /**
                 * Constructs a new Entity.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.ListEntriesResponse.IEntity);

                /** Entity id. */
                public id: string;

                /** Entity text. */
                public text: string;

                /** Entity creatorId. */
                public creatorId: string;

                /** Entity createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Entity updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Entity instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Entity instance
                 */
                public static create(properties?: messages.entry.ListEntriesResponse.IEntity): messages.entry.ListEntriesResponse.Entity;

                /**
                 * Encodes the specified Entity message. Does not implicitly {@link messages.entry.ListEntriesResponse.Entity.verify|verify} messages.
                 * @param message Entity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.ListEntriesResponse.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Entity message, length delimited. Does not implicitly {@link messages.entry.ListEntriesResponse.Entity.verify|verify} messages.
                 * @param message Entity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.ListEntriesResponse.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Entity message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.ListEntriesResponse.Entity;

                /**
                 * Decodes an Entity message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.ListEntriesResponse.Entity;

                /**
                 * Verifies an Entity message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Entity
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.ListEntriesResponse.Entity;

                /**
                 * Creates a plain object from an Entity message. Also converts values to other types if specified.
                 * @param message Entity
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.ListEntriesResponse.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Entity to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a DeleteEntryRequest. */
        interface IDeleteEntryRequest {

            /** DeleteEntryRequest context */
            context?: (messages.entry.IRequestContext|null);

            /** DeleteEntryRequest payload */
            payload?: (messages.entry.DeleteEntryRequest.IPayload|null);
        }

        /** Represents a DeleteEntryRequest. */
        class DeleteEntryRequest implements IDeleteEntryRequest {

            /**
             * Constructs a new DeleteEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IDeleteEntryRequest);

            /** DeleteEntryRequest context. */
            public context?: (messages.entry.IRequestContext|null);

            /** DeleteEntryRequest payload. */
            public payload?: (messages.entry.DeleteEntryRequest.IPayload|null);

            /**
             * Creates a new DeleteEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteEntryRequest instance
             */
            public static create(properties?: messages.entry.IDeleteEntryRequest): messages.entry.DeleteEntryRequest;

            /**
             * Encodes the specified DeleteEntryRequest message. Does not implicitly {@link messages.entry.DeleteEntryRequest.verify|verify} messages.
             * @param message DeleteEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IDeleteEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteEntryRequest message, length delimited. Does not implicitly {@link messages.entry.DeleteEntryRequest.verify|verify} messages.
             * @param message DeleteEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IDeleteEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.DeleteEntryRequest;

            /**
             * Decodes a DeleteEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.DeleteEntryRequest;

            /**
             * Verifies a DeleteEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.DeleteEntryRequest;

            /**
             * Creates a plain object from a DeleteEntryRequest message. Also converts values to other types if specified.
             * @param message DeleteEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.DeleteEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DeleteEntryRequest {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.DeleteEntryRequest.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.DeleteEntryRequest.IPayload): messages.entry.DeleteEntryRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.DeleteEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.DeleteEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.DeleteEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.DeleteEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.DeleteEntryRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.DeleteEntryRequest.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.DeleteEntryRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.DeleteEntryRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a DeleteEntryResponse. */
        interface IDeleteEntryResponse {

            /** DeleteEntryResponse error */
            error?: (messages.entry.IError|null);

            /** DeleteEntryResponse traceId */
            traceId?: (string|null);
        }

        /** Represents a DeleteEntryResponse. */
        class DeleteEntryResponse implements IDeleteEntryResponse {

            /**
             * Constructs a new DeleteEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IDeleteEntryResponse);

            /** DeleteEntryResponse error. */
            public error?: (messages.entry.IError|null);

            /** DeleteEntryResponse traceId. */
            public traceId: string;

            /**
             * Creates a new DeleteEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteEntryResponse instance
             */
            public static create(properties?: messages.entry.IDeleteEntryResponse): messages.entry.DeleteEntryResponse;

            /**
             * Encodes the specified DeleteEntryResponse message. Does not implicitly {@link messages.entry.DeleteEntryResponse.verify|verify} messages.
             * @param message DeleteEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IDeleteEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteEntryResponse message, length delimited. Does not implicitly {@link messages.entry.DeleteEntryResponse.verify|verify} messages.
             * @param message DeleteEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IDeleteEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.DeleteEntryResponse;

            /**
             * Decodes a DeleteEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.DeleteEntryResponse;

            /**
             * Verifies a DeleteEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.DeleteEntryResponse;

            /**
             * Creates a plain object from a DeleteEntryResponse message. Also converts values to other types if specified.
             * @param message DeleteEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.DeleteEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an InfoEntryCreated. */
        interface IInfoEntryCreated {

            /** InfoEntryCreated payload */
            payload?: (messages.entry.InfoEntryCreated.IPayload|null);
        }

        /** Represents an InfoEntryCreated. */
        class InfoEntryCreated implements IInfoEntryCreated {

            /**
             * Constructs a new InfoEntryCreated.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IInfoEntryCreated);

            /** InfoEntryCreated payload. */
            public payload?: (messages.entry.InfoEntryCreated.IPayload|null);

            /**
             * Creates a new InfoEntryCreated instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InfoEntryCreated instance
             */
            public static create(properties?: messages.entry.IInfoEntryCreated): messages.entry.InfoEntryCreated;

            /**
             * Encodes the specified InfoEntryCreated message. Does not implicitly {@link messages.entry.InfoEntryCreated.verify|verify} messages.
             * @param message InfoEntryCreated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IInfoEntryCreated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InfoEntryCreated message, length delimited. Does not implicitly {@link messages.entry.InfoEntryCreated.verify|verify} messages.
             * @param message InfoEntryCreated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IInfoEntryCreated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InfoEntryCreated message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InfoEntryCreated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntryCreated;

            /**
             * Decodes an InfoEntryCreated message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InfoEntryCreated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntryCreated;

            /**
             * Verifies an InfoEntryCreated message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InfoEntryCreated message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InfoEntryCreated
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntryCreated;

            /**
             * Creates a plain object from an InfoEntryCreated message. Also converts values to other types if specified.
             * @param message InfoEntryCreated
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.InfoEntryCreated, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InfoEntryCreated to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace InfoEntryCreated {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.InfoEntryCreated.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.InfoEntryCreated.IPayload): messages.entry.InfoEntryCreated.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.InfoEntryCreated.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.InfoEntryCreated.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.InfoEntryCreated.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.InfoEntryCreated.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntryCreated.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntryCreated.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntryCreated.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.InfoEntryCreated.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an InfoEntryUpdated. */
        interface IInfoEntryUpdated {

            /** InfoEntryUpdated payload */
            payload?: (messages.entry.InfoEntryUpdated.IPayload|null);
        }

        /** Represents an InfoEntryUpdated. */
        class InfoEntryUpdated implements IInfoEntryUpdated {

            /**
             * Constructs a new InfoEntryUpdated.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IInfoEntryUpdated);

            /** InfoEntryUpdated payload. */
            public payload?: (messages.entry.InfoEntryUpdated.IPayload|null);

            /**
             * Creates a new InfoEntryUpdated instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InfoEntryUpdated instance
             */
            public static create(properties?: messages.entry.IInfoEntryUpdated): messages.entry.InfoEntryUpdated;

            /**
             * Encodes the specified InfoEntryUpdated message. Does not implicitly {@link messages.entry.InfoEntryUpdated.verify|verify} messages.
             * @param message InfoEntryUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IInfoEntryUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InfoEntryUpdated message, length delimited. Does not implicitly {@link messages.entry.InfoEntryUpdated.verify|verify} messages.
             * @param message InfoEntryUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IInfoEntryUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InfoEntryUpdated message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InfoEntryUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntryUpdated;

            /**
             * Decodes an InfoEntryUpdated message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InfoEntryUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntryUpdated;

            /**
             * Verifies an InfoEntryUpdated message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InfoEntryUpdated message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InfoEntryUpdated
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntryUpdated;

            /**
             * Creates a plain object from an InfoEntryUpdated message. Also converts values to other types if specified.
             * @param message InfoEntryUpdated
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.InfoEntryUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InfoEntryUpdated to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace InfoEntryUpdated {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);

                /** Payload text */
                text?: (string|null);

                /** Payload creatorId */
                creatorId?: (string|null);

                /** Payload createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.InfoEntryUpdated.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /** Payload creatorId. */
                public creatorId: string;

                /** Payload createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.InfoEntryUpdated.IPayload): messages.entry.InfoEntryUpdated.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.InfoEntryUpdated.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.InfoEntryUpdated.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.InfoEntryUpdated.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.InfoEntryUpdated.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntryUpdated.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntryUpdated.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntryUpdated.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.InfoEntryUpdated.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an InfoEntryDeleted. */
        interface IInfoEntryDeleted {

            /** InfoEntryDeleted payload */
            payload?: (messages.entry.InfoEntryDeleted.IPayload|null);
        }

        /** Represents an InfoEntryDeleted. */
        class InfoEntryDeleted implements IInfoEntryDeleted {

            /**
             * Constructs a new InfoEntryDeleted.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IInfoEntryDeleted);

            /** InfoEntryDeleted payload. */
            public payload?: (messages.entry.InfoEntryDeleted.IPayload|null);

            /**
             * Creates a new InfoEntryDeleted instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InfoEntryDeleted instance
             */
            public static create(properties?: messages.entry.IInfoEntryDeleted): messages.entry.InfoEntryDeleted;

            /**
             * Encodes the specified InfoEntryDeleted message. Does not implicitly {@link messages.entry.InfoEntryDeleted.verify|verify} messages.
             * @param message InfoEntryDeleted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IInfoEntryDeleted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InfoEntryDeleted message, length delimited. Does not implicitly {@link messages.entry.InfoEntryDeleted.verify|verify} messages.
             * @param message InfoEntryDeleted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IInfoEntryDeleted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InfoEntryDeleted message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InfoEntryDeleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntryDeleted;

            /**
             * Decodes an InfoEntryDeleted message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InfoEntryDeleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntryDeleted;

            /**
             * Verifies an InfoEntryDeleted message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InfoEntryDeleted message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InfoEntryDeleted
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntryDeleted;

            /**
             * Creates a plain object from an InfoEntryDeleted message. Also converts values to other types if specified.
             * @param message InfoEntryDeleted
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.InfoEntryDeleted, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InfoEntryDeleted to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace InfoEntryDeleted {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.InfoEntryDeleted.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.InfoEntryDeleted.IPayload): messages.entry.InfoEntryDeleted.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.InfoEntryDeleted.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.InfoEntryDeleted.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.InfoEntryDeleted.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.InfoEntryDeleted.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntryDeleted.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntryDeleted.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntryDeleted.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.InfoEntryDeleted.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace error. */
    namespace error {

        /** Properties of an Error. */
        interface IError {

            /** Error code */
            code?: (messages.error.Error.Code|null);

            /** Error message */
            message?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.error.IError);

            /** Error code. */
            public code: messages.error.Error.Code;

            /** Error message. */
            public message: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: messages.error.IError): messages.error.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link messages.error.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.error.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link messages.error.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.error.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.error.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.error.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): messages.error.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.error.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Error {

            /** Code enum. */
            enum Code {
                UNKNOWN = 0
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
