function invertTree(r) {

    if (r === null) {
        return null;
    }

    let left = invertTree(r.left);
    let right = invertTree(r.right);

    r.left = right;
    r.right = left;

    return r;
}

module.exports = invertTree;
