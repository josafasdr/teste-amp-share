/**
 * Custom content types
 */
function getContentTypes()
{
   // TODO: Data webscript call to return list of available types
	// var site = page.url.templateArgs.site;
   var contentTypes = [
   {
      id: "cm:content",
      value: "type.cm_content"
   }, {
		id : "sif:documento_admissional",
		value : "type.sif_documento_admissional"
	}, {
		id : "sif:ficha_admissional",
		value : "type.sif_ficha_admissional"
	}, {
		id : "sif:processo",
		value : "type.sif_processo"
	}, {
		id : "sif:portaria",
		value : "type.sif_portaria"
	}, {
		id : "sif:frequencia",
		value : "type.sif_frequencia"
	} ];

   return contentTypes;
}

model.contentTypes = getContentTypes();

function main()
{
   // Widget instantiation metadata...
   var flashUpload = {
      id : "FlashUpload", 
      name : "Alfresco.FlashUpload"
   };
   model.widgets = [flashUpload];
}

main();

