var a={
    aa: function (id, name) {
        return this.id + "--------" + this.name+id+name;
    }
}
var b = {
    id: "1",
    name: "fcw",
};

b = a.aa.apply(b,[2,"cqq"]);
console.log(b)