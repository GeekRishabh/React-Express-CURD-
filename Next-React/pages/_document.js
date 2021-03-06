import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  getChildContext () {
    return {
      _documentProps: {
        ...this.props,
        dev: false
      }
    }
  }

  render () {
    return (
      <html>
        <Head>
          <title>TaxiApp Web Dashboard</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
