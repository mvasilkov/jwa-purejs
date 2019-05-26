'use strict'

const { derToJose, joseToDer } = require('ecdsa-sig-formatter')
const EC = require('elliptic').ec
const parseKeys = require('parse-asn1')
const sha256 = require('fast-sha256')

module.exports = function jwa(a) {
    if (!/^[Ee][Ss]256$/.test(a)) throw Error('NotImplemented')

    const curve = new EC('p256')

    return {
        sign(a, sk) {
            if (typeof a == 'string') a = (new TextEncoder).encode(a)
            if (typeof sk == 'string') sk = parseKeys(sk).privateKey

            const out = curve.keyFromPrivate(sk, 10).sign(sha256(a))
            return derToJose(Buffer.from(out.toDER()), 'ES256')
        },
        verify(a, b, pk) {
            if (typeof a == 'string') a = (new TextEncoder).encode(a)
            if (typeof b == 'string') b = joseToDer(b, 'ES256')
            if (typeof pk == 'string') pk = parseKeys(pk).data.subjectPrivateKey.data

            return curve.keyFromPublic(pk, 10).verify(sha256(a), b)
        },
    }
}
