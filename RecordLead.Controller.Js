({
	showToast : function(component, event, helper) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Success!",
        "message": "Contato cadastrado com sucesso."
    });
    toastEvent.fire();
}
})
