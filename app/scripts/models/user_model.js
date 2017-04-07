export default function GrackleUser (attrs) {
  this.id = attrs.ownerId
  this.name = attrs.name || "No Name Given"
  this.username = attrs.username
  this.bio = attrs.bio
  this.email = attrs.email
  this.location = attrs.location
}
