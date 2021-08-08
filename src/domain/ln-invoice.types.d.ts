type LnInvoiceDecodeErrorType = "LnInvoiceDecodeError"
type LnInvoiceDecodeError = ErrorWithMessage<LnInvoiceDecodeErrorType>

declare const encodedPaymentRequestSymbol: unique symbol
type EncodedPaymentRequest = string & { [encodedPaymentRequestSymbol]: never }

declare const paymentHashSymbol: unique symbol
type PaymentHash = string & { [paymentHashSymbol]: never }

declare const paymentSecret: unique symbol
type PaymentSecret = string & { [paymentSecretSymbol]: never }

type LnInvoice = {
  readonly paymentHash: PaymentHash
  readonly paymentSecret: PaymentSecret
  readonly paymentRequest: EncodedPaymentRequest
}
