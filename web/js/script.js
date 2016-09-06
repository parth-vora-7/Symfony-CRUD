function deletePost(e) {
    if(!confirm('Do you really want to delete this post?'))
    {
        return false;
    }
}