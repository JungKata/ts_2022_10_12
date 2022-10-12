var t = [1, 2, 3];
t = t.filter(function (e) { return e > 2; });
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('szoveg').addEventListener('input', function (e) {
        //let elem = document.getElementById('szoveg') as HTMLInputElement;
        //document.body.style.backgroundColor = elem.value;
        var elem = e.currentTarget;
        document.body.style.backgroundColor = elem.value;
    });
});
