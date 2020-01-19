import Post from './Post'
import './styles/styles.css'
import json from './assets/json.json'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import WebpackLogo from './assets/webpack-logo.png'

const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to String:', post.toString())

console.log(json)
console.log(xml)
console.log(csv)
