export default function (node) {

    var id = new D3NE.Control('<input type="text" placeholder="id">')

    node.addControl(id, 0);

    return node;
}