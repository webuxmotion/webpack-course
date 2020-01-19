export default class Post {
  constructor(title, img) {
    this.title = title
    this.img = img
    this.date = new Date()
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
      igm: this.img
    })
  }

  get uppercaseTitle() {
    return this.title.toUpperCase()
  }
}