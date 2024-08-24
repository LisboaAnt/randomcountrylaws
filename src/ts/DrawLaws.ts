function DrawLaws(Laws){
    var ResultLaw;
    while(Laws.length>1){
        var RandomLaw = Math.floor(Math.random() * Laws.length);
        Laws.splice(RandomLaw,1);
    }
    ResultLaw = Laws[0];
    ExecutePromulgates(ResultLaw) {

    }
    ExecuteBlocks(ResultLaw) {

    }
    return ResultLaw;
}