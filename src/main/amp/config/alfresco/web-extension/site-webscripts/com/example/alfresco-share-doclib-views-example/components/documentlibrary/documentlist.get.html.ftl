<@link rel="stylesheet" type="text/css" href="${url.context}/res/alfresco-share-doclib-views-example/components/documentlibrary/documentlist-custom.css"/>
<@script type="text/javascript" src="${url.context}/res/alfresco-share-doclib-views-example/components/documentlibrary/documentlist-custom.js"></@script>

<@markup id="customDocLibView" target="documentListContainer" action="after">
    <script type="text/javascript">//<![CDATA[
        YAHOO.Bubbling.subscribe("postSetupViewRenderers", function(layer, args) {
            var scope = args[1].scope;
            var largeViewRenderer = new Alfresco.DocumentListLargeViewRenderer("large");
            scope.registerViewRenderer(largeViewRenderer);
        });
    //]]></script>
</@>