$(function () {
	var theTemplateScript = $("#address-template").html();
	var theTemplate = Handlebars.compile(theTemplateScript);

	var zachObj = {
		"name": "Zach Turner",
		"city": "Plymouth",
		"age": "28",
		"weight": "205lbs"
	};

	var theCompiledHtml = theTemplate(zachObj);

	$('.content-holder').html(theCompiledHtml);
});