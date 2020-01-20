import * as $ from 'jquery'
import Post from '@models/Post'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'
import './babel'
import json from './assets/json'
import xml from './assets/data.xml'
//import csv from './assets/data.csv'
import WebpackLogo from '@/assets/webpack-logo'
import React from 'react'
import { render } from 'react-dom'

const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to String:', post.toString())

const App = () => (
  <div className="container">
    <h1>Webpack Coursee</h1>

    <hr/>

    <div className="logo"></div>

    <hr/>

    <pre></pre>

    <hr/>

    <div className="box">
      <h2>Less</h2>
    </div>

    <div className="card">
      <h2>Scss</h2>
    </div>
  </div>
)

render(<App/>, document.getElementById('app'))

console.log(json)
console.log(xml)
//console.log(csv)

$('pre').addClass('code').html(post.toString())
