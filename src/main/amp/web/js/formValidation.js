/**
 * Populate product validation handler based on another field, tests that the
 * given field has a value and queries via AJAX for associated product
 * information.
 * 
 * @method populateProduct
 * @param field
 *            {object} The element representing the field the validation is for
 * @param args
 *            {object} Not used
 * @param event
 *            {object} The event that caused this handler to be called, maybe
 *            null
 * @param form
 *            {object} The forms runtime class instance the field is being
 *            managed by
 * @param silent
 *            {boolean} Determines whether the user should be informed upon
 *            failure
 * @param message
 *            {string} Message to display when validation fails, maybe null
 * @static
 */
Alfresco.forms.validation.preencheProntuario = function preencheProntuario(field,	args, event, form, silent, message) {
	if (Alfresco.logger.isDebugEnabled())
		Alfresco.logger.debug("Atualizando os metadados do prontuário pelo campo '" + field.id + "'");

	// Call this function on successful AJAX call
	// update the fields of the product based on the product number query
	var updateFields = function(res) {
		var resultado = eval('(' + res.serverResponse.responseText + ')');
		if (resultado.nome != null) {
			field.form.prop_cm_name.value = resultado.nome;
		}
		if (resultado.cargo != null) {
			field.form.prop_sif_cargo.value = resultado.cargo;
		}
		if (resultado.email != null) {
			field.form.prop_sif_email.value = resultado.email;
		}
		if (resultado.protocolo != null) {
			if (field.form.prop_sif_prontuario_protocolo.value == null || field.form.prop_sif_prontuario_protocolo.value == "")
				field.form.prop_sif_prontuario_protocolo.value = resultado.protocolo;
		}
		if (resultado.modulo != null) {
			field.form.prop_sif_modulo.value = resultado.modulo;
		}
		if (resultado.prateleira != null) {
			field.form.prop_sif_prateleira.value = resultado.prateleira;
		}
		if (resultado.ordem != null) {
			field.form.prop_sif_ordem.value = resultado.ordem;
		}
		if (resultado.tipoPasta != null) {
			field.form.prop_sif_tipo_pasta.value = resultado.tipoPasta;
		}
		if (resultado.quantidadePastas != null) {
			field.form.prop_sif_quantidade_pastas.value = resultado.quantidadePastas;
		}
		if (resultado.paginas != null) {
			if (field.form.prop_sif_prontuario_paginas.value == "")
				field.form.prop_sif_prontuario_paginas.value = resultado.paginas;
		}
	};

	// if our product number is not empty, do an AJAX query to get the product
	// for this product number
	// on failure, fail silently
	if (field.form.prop_sif_prontuario_matricula.value != null	&& field.form.prop_sif_prontuario_matricula.value != "") {
		Alfresco.util.Ajax.jsonGet({
			url : Alfresco.constants.PROXY_URI + "sif/prontuario/" + field.form.prop_sif_prontuario_matricula.value,
			successCallback : {
				fn : updateFields,
				scope : this
			},
			failureCallback : {
				fn : function() {
				},
				scope : this
			}
		});
	}
	return true;
};
