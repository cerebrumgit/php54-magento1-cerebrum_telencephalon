/**
 * Cerebrum_Telencephalon extension
 * 
 * NOTICE OF LICENSE
 * 
 * This source file is subject to the COMMERCIAL License
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.cerebrum.com.br/commercial-license
 * 
 * @category   	Cerebrum
 * @package		Cerebrum_Telencephalon
 * @copyright  	Copyright (c) 2013
 * @license		http://www.cerebrum.com.br/commercial-license
 */

//---

/**
 * Base
 */

//---

/**
* mage/adminhtml/loader.js
*/
function toggleSelectsUnderBlock(block, flag){
    if(Prototype.Browser.IE){
        var selects = document.getElementsByTagName("select");
        for(var i=0; i<selects.length; i++){
            /**
             * @todo: need check intersection
             */
            if(flag){
                if(selects[i].needShowOnSuccess){
                    selects[i].needShowOnSuccess = false;
                    // Element.show(selects[i])
                    selects[i].style.visibility = '';
                }
            }
            else{
                if(Element.visible(selects[i])){
                    // Element.hide(selects[i]);
                    selects[i].style.visibility = 'hidden';
                    selects[i].needShowOnSuccess = true;
                }
            }
        }
    }
}

//---

function txtBoxFormat(objeto, sMask, evtKeyPress) {
 var i, nCount, sValue, fldLen, mskLen,bolMask, sCod, nTecla;


if(document.all) { // Internet Explorer
 nTecla = evtKeyPress.keyCode;
} else if(document.layers) { // Nestcape
 nTecla = evtKeyPress.which;
} else {
 nTecla = evtKeyPress.which;
 if (nTecla == 8) {
 return true;
 }
}

 sValue = objeto.value;

 // Limpa todos os caracteres de formataçãoo que
 // já estiverem no campo.
 sValue = sValue.toString().replace( "-", "" );
 sValue = sValue.toString().replace( "-", "" );
 sValue = sValue.toString().replace( ".", "" );
 sValue = sValue.toString().replace( ".", "" );
 sValue = sValue.toString().replace( "/", "" );
 sValue = sValue.toString().replace( "/", "" );
 sValue = sValue.toString().replace( ":", "" );
 sValue = sValue.toString().replace( ":", "" );
 sValue = sValue.toString().replace( "(", "" );
 sValue = sValue.toString().replace( "(", "" );
 sValue = sValue.toString().replace( ")", "" );
 sValue = sValue.toString().replace( ")", "" );
 sValue = sValue.toString().replace( " ", "" );
 sValue = sValue.toString().replace( " ", "" );
 fldLen = sValue.length;
 mskLen = sMask.length;

 i = 0;
 nCount = 0;
 sCod = "";
 mskLen = fldLen;

 while (i <= mskLen) {
 bolMask = ((sMask.charAt(i) == "-") || (sMask.charAt(i) == ".") || (sMask.charAt(i) == "/") || (sMask.charAt(i) == ":"))
 bolMask = bolMask || ((sMask.charAt(i) == "(") || (sMask.charAt(i) == ")") || (sMask.charAt(i) == " "))

 if (bolMask) {
 sCod += sMask.charAt(i);
 mskLen++; }
 else {
 sCod += sValue.charAt(nCount);
 nCount++;
 }

 i++;
 }

 if(sCod!="("){
 objeto.value = sCod;
 }

 if (nTecla != 8 && nTecla != 0) { // backspace e TAB
 if (sMask.charAt(i-1) == "9") { // apenas números...
 return ((nTecla > 47) && (nTecla < 58)); }
 else { // qualquer caracter...
 return true;
 }
 }
 else {
 return true;
 }
 }

//---

function toggleMenu(el, over)
{
    if (over) {
        Element.addClassName(el, 'over');
    }
    else {
        Element.removeClassName(el, 'over');
    }
}

//---

function plusone_vote( obj ) {
	_gaq.push(['_trackEvent','plusone',obj.state, document.location.href]);
}

//---

// This code is in the public domain. Feel free to link back to http://jan.moesen.nu/
function sprintf()
{
	if (!arguments || arguments.length < 1 || !RegExp)
	{
		return;
	}
	var str = arguments[0];
	var re = /([^%]*)%('.|0|\x20)?(-)?(\d+)?(\.\d+)?(%|b|c|d|u|f|o|s|x|X)(.*)/;
	var a = b = [], numSubstitutions = 0, numMatches = 0;
	while (a = re.exec(str))
	{
		var leftpart = a[1], pPad = a[2], pJustify = a[3], pMinLength = a[4];
		var pPrecision = a[5], pType = a[6], rightPart = a[7];
		
		//alert(a + '\n' + [a[0], leftpart, pPad, pJustify, pMinLength, pPrecision);

		numMatches++;
		if (pType == '%')
		{
			subst = '%';
		}
		else
		{
			numSubstitutions++;
			if (numSubstitutions >= arguments.length)
			{
				alert('Error! Not enough function arguments (' + (arguments.length - 1) + ', excluding the string)\nfor the number of substitution parameters in string (' + numSubstitutions + ' so far).');
			}
			var param = arguments[numSubstitutions];
			var pad = '';
			       if (pPad && pPad.substr(0,1) == "'") pad = leftpart.substr(1,1);
			  else if (pPad) pad = pPad;
			var justifyRight = true;
			       if (pJustify && pJustify === "-") justifyRight = false;
			var minLength = -1;
			       if (pMinLength) minLength = parseInt(pMinLength);
			var precision = -1;
			       if (pPrecision && pType == 'f') precision = parseInt(pPrecision.substring(1));
			var subst = param;
			       if (pType == 'b') subst = parseInt(param).toString(2);
			  else if (pType == 'c') subst = String.fromCharCode(parseInt(param));
			  else if (pType == 'd') subst = parseInt(param) ? parseInt(param) : 0;
			  else if (pType == 'u') subst = Math.abs(param);
			  else if (pType == 'f') subst = (precision > -1) ? Math.round(parseFloat(param) * Math.pow(10, precision)) / Math.pow(10, precision): parseFloat(param);
			  else if (pType == 'o') subst = parseInt(param).toString(8);
			  else if (pType == 's') subst = param;
			  else if (pType == 'x') subst = ('' + parseInt(param).toString(16)).toLowerCase();
			  else if (pType == 'X') subst = ('' + parseInt(param).toString(16)).toUpperCase();
		}
		str = leftpart + subst + rightPart;
	}
	return str;
}
//---

// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
function getInternetExplorerVersion() {
	var rv = -1; // Return value assumes failure.
	if (navigator.appName == 'Microsoft Internet Explorer')
	{
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	return rv;
}

//---

/**
* Returns the value of the selected radio button in the radio group, null if
* none are selected, and false if the button group doesn't exist
*
* @param {radio Object} or {radio id} el
* OR
* @param {form Object} or {form id} el
* @param {radio group name} radioGroup
*/
function $RF(el, radioGroup) {
    if($(el).type && $(el).type.toLowerCase() == 'radio') {
        var radioGroup = $(el).name;
        var el = $(el).form;
    } else if ($(el).tagName.toLowerCase() != 'form') {
        return false;
    }
 
    var checked = $(el).getInputs('radio', radioGroup).find(
        function(re) {return re.checked;}
    );
    return (checked) ? $F(checked) : null;
}

//---

function getSelectValue(elementObject) {
	console.log(elementObject);
	if(!elementObject){
		return;
	}

	var objectLength = elementObject.length;
	console.log(objectLength);

	for(var i = 0; i < objectLength; i++) {
		var objectItem = elementObject[i];
		var item = objectItem.options[objectItem.selectedIndex].value;

		if( !isNull(item) ) {
			return item;
		}
		
	}
	return true;
}

//---

// http://www.somacon.com/p143.php

// return the value of the radio button that is checked
// return an empty string if none are checked, or
// there are no radio buttons
function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}

// set the radio button with the given value as being checked
// do nothing if there are no radio buttons
// if the given value does not exist, all the radio buttons
// are reset to unchecked
function setCheckedValue(radioObj, newValue) {
	if(!radioObj)
		return;
	var radioLength = radioObj.length;
	if(radioLength == undefined) {
		radioObj.checked = (radioObj.value == newValue.toString());
		return;
	}
	for(var i = 0; i < radioLength; i++) {
		radioObj[i].checked = false;
		if(radioObj[i].value == newValue.toString()) {
			radioObj[i].checked = true;
			return radioObj[i];
		}
	}
}

//---

function smo_input_get_label(inputElem){
//function created by Shawn Olson at http://www.shawnolson.net
if(inputElem.parentNode){
if(inputElem.parentNode.tagName=='label'){
return inputElem.parentNode;
}
}
var labels=document.getElementsByTagName("label"),i;
for( i=0; i<labels.length;i++ ){
if(labels[i].htmlFor==inputElem.id){
return labels[i];
}
}
return false;
}

//---

// http://www.dzone.com/snippets/javascript-function-checks-dom
function isVisible(obj)
{
    if (obj == document) return true
    
    if (!obj) return false
    if (!obj.parentNode) return false
    if (obj.style) {
        if (obj.style.display == 'none') return false
        if (obj.style.visibility == 'hidden') return false
    }
    
    //Try the computed style in a standard way
    if (window.getComputedStyle) {
        var style = window.getComputedStyle(obj, "")
        if (style.display == 'none') return false
        if (style.visibility == 'hidden') return false
    }
    
    //Or get the computed style using IE's silly proprietary way
    var style = obj.currentStyle
    if (style) {
        if (style['display'] == 'none') return false
        if (style['visibility'] == 'hidden') return false
    }
    
    return isVisible(obj.parentNode)
}

//---

function isNull(value) {
    if (value == "undefined" || value == "null" || value == null || value == "") {
        return true;
    }
    return false;
};

//---

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}

//---

String.prototype.ltrim = function() {
	return this.replace(/^\s+/,"");
}

//---

String.prototype.rtrim = function() {
	return this.replace(/\s+$/,"");
}

//---

function Left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}

//---

function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}

//---

// http://jehiah.cz/a/javascript-isdefined-function

function isdefined( variable)
{
    return (typeof(window[variable]) == "undefined")?  false: true;
}

//---

//http://fishpig.co.uk/magento-tutorials/magento-forms-prototype-javascript-validation

function formCallback(result, form) {
console.log("valiation callback for form '" + form.id + "': result = " + result);
}

var valid = new Validation('test', {immediate : true, onFormValidate : formCallback});

Validation.addAllThese([

/**************************** validate-cpf-cnpj / validate-street-address / validate-cpf / validate-cnpj / validate-zip-brasil ********************************/

['validate-cpf-cnpj', 'O CPF ou CNPJ informado \xE9 invalido', function(v, elm) {
	return validaCPF(v,0);
}],

//http://social.msdn.microsoft.com/Forums/pt-BR/vsvbasicpt/thread/0912f8dc-6f1a-456b-85f4-94576c3de569 - Gabriel Marquez - Moderador
['validate-street-address', 'Endereço inválido, preencha no formato requerido: Rua Nome da Rua, 123<br>Obs. É obrigatório informar após o logradouro o delimitador virgula + espaço + números<br><br>Atenção! Alguns endereços têm formatos diferentes e você pode ter dificuldade de preencher o cadastro. Isso acontece em cidades como Brasília, Goiânia e Palmas, entre outras.<br><br>Como o número é obrigatório, preencha como zero, conforme modelo a seguir<br>Rua Nome da Rua, 0 - Quadra 1 - Lote 1 ', function(v) {
	return /(^[\w\s][^0-9|,]*)(((,\s|(N|n)º\s)([0-9/]+))|(\s?([0-9/]+)))+(.*?)$/.test(v)
}],

['validate-telefone-br', 'Formato para Telefone inválido, preencha no formato requerido: (99) 9999-9999', function(v) {
	return Validation.get('IsEmpty').test(v) || /^(\()?\d{2}(\))?(-|\s)?\d{4}(-|\s)\d{4}$/.test(v);
}],

['validate-telefone-br-nove-mascarado', 'Formato para Telefone inválido, preencha no formato requerido: (99) 99999-9999', function(v) {
	return Validation.get('IsEmpty').test(v) || /^(\()?\d{2}(\))?(-|\s)?\d{5}(-|\s)\d{4}$/.test(v);
}],

['validate-celular-nove-digitos', 'Formato para Telefone inválido, preencha no formato requerido: 999999999', function(v) {
	return Validation.get('IsEmpty').test(v) || /^\d{9}$/.test(v);
}],

['validate-mobile', 'Formato para Telefone inválido, preencha no formato requerido: +99 (99) 9999-9999', function(v) {
	return Validation.get('IsEmpty').test(v) || /^[\+]\d{2}?(-|\s)(\()?\d{2}(\))?(-|\s)?\d{4}(-|\s)\d{4}$/.test(v);
}],

['validate-zip-brasil', 'Formato para CEP inválido, preencha no formato requerido: 99999-999', function(v) {
	return Validation.get('IsEmpty').test(v) || /(^\d{8}$)|(^\d{5}-\d{3}$)/.test(v);
}],

['validate-cpf', 'CPF inválido, preencha no formato requerido: 999.999.999-99', function(v, elm) {
	// obtendo o cpf do input //
	var cpf = elm.value;

	if(cpf == "") {
	return true;
	}

	cpf = cpf.replace (".","");
	cpf = cpf.replace (".","");
	cpf = cpf.replace ("-","");
	cpf = cpf.replace ("/","");

	if (cpf.length < 11){
	return false;
	}

	if(cpf==00000000000 || cpf==11111111111 || cpf==22222222222 || cpf==33333333333 || cpf==44444444444 || cpf==55555555555 || cpf==66666666666 || cpf==77777777777 || cpf==88888888888 || cpf==99999999999) {
	return false;
	}

	var a = [];
	var b = new Number;
	var c = 11;
	for (i=0; i<11; i++){
	a[i] = cpf.charAt(i);
	if (i <  9) b += (a[i] *  --c);
	}
	if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11-x }
	b = 0;
	c = 11;
	for (y=0; y<10; y++) b += (a[y] *  c--);
	if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11-x; }
	status = a[9] + ""+ a[10]
	if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10])){
	return false;
	}

	return true;
}],

['validate-cnpj','CNPJ Inválido, preencha no formato requerido', function(v,elm){

	cnpj = elm.value.replace(/(-)|(\.)|(\/)/g,"")

	var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
	digitos_iguais = 1;
	if (cnpj.length < 14 && cnpj.length < 15)
	return false;
	for (i = 0; i < cnpj.length - 1; i++)
	if (cnpj.charAt(i) != cnpj.charAt(i + 1))
	{
	digitos_iguais = 0;
	break;
	}
	if (!digitos_iguais)
	{
	tamanho = cnpj.length - 2
	numeros = cnpj.substring(0,tamanho);
	digitos = cnpj.substring(tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (i = tamanho; i >= 1; i--)
	{
	soma += numeros.charAt(tamanho - i) * pos--;
	if (pos < 2)
	pos = 9;
	}
	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado != digitos.charAt(0))
	return false;
	tamanho = tamanho + 1;
	numeros = cnpj.substring(0,tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (i = tamanho; i >= 1; i--)
	{
	soma += numeros.charAt(tamanho - i) * pos--;
	if (pos < 2)
	pos = 9;
	}
	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado != digitos.charAt(1))
	return false;
	return true;
	}
	else
	return false;
}]

/**************************** validate-cpf-cnpj / validate-street-address / validate-cpf / validate-cnpj / validate-zip-brasil ********************************/

]);

//--

function validaCPF(cpf,pType){

	var cpf_filtrado = "", valor_1 = " ", valor_2 = " ", ch = "";
	var valido = false;

	for (i = 0; i < cpf.length; i++){
	ch = cpf.substring(i, i + 1);
	if (ch >= "0" && ch <= "9"){
	cpf_filtrado = cpf_filtrado.toString() + ch.toString()
	valor_1 = valor_2;
	valor_2 = ch;
	}
	if ((valor_1 != " ") && (!valido)) valido = !(valor_1 == valor_2);
	}

	if (!valido) cpf_filtrado = "12345678912";

	if (cpf_filtrado.length < 11){
	for (i = 1; i <= (11 - cpf_filtrado.length); i++){cpf_filtrado = "0" + cpf_filtrado;}
	}

	if(pType <= 1){
	if ( ( cpf_filtrado.substring(9,11) == checkCPF( cpf_filtrado.substring(0,9) ) ) && ( cpf_filtrado.substring(11,12)=="") ){return true;}
	}

	if((pType == 2) || (pType == 0)){
	if (cpf_filtrado.length >= 14){
	if ( cpf_filtrado.substring(12,14) == checkCNPJ( cpf_filtrado.substring(0,12) ) ){ return true;}
	}
	}

	return false;

}

function checkCNPJ(vCNPJ){
	var mControle = "";
	var aTabCNPJ = new Array(5,4,3,2,9,8,7,6,5,4,3,2);

	for (i = 1 ; i <= 2 ; i++){
	mSoma = 0;
	for (j = 0 ; j < vCNPJ.length ; j++)
	mSoma = mSoma + (vCNPJ.substring(j,j+1) * aTabCNPJ[j]);
	if (i == 2 ) mSoma = mSoma + ( 2 * mDigito );
	mDigito = ( mSoma * 10 ) % 11;
	if (mDigito == 10 ) mDigito = 0;
	mControle1 = mControle ;
	mControle = mDigito;
	aTabCNPJ = new Array(6,5,4,3,2,9,8,7,6,5,4,3);
	}
	return( (mControle1 * 10) + mControle );
}

function checkCPF(vCPF){
	var mControle = ""
	var mContIni = 2, mContFim = 10, mDigito = 0;

	for (j = 1 ; j <= 2 ; j++){
	mSoma = 0;
	for (i = mContIni ; i <= mContFim ; i++)
	mSoma = mSoma + (vCPF.substring((i-j-1),(i-j)) * (mContFim + 1 + j - i));
	if (j == 2 ) mSoma = mSoma + ( 2 * mDigito );
	mDigito = ( mSoma * 10 ) % 11;
	if (mDigito == 10) mDigito = 0;
	mControle1 = mControle;
	mControle = mDigito;
	mContIni = 3;
	mContFim = 11;
	}
	return( (mControle1 * 10) + mControle );
}

//---

Number.prototype.formatMoney = function(c, d, t){ //Serve para formatar um number em formato dinheiro 
	var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, i = parseInt(n = (+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0; 
	return (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + (n - i).toFixed(c).slice(2) : ""); 
};

//---

// http://stackoverflow.com/questions/460644/trigger-an-event-with-prototype

Element.prototype.triggerEvent = function(eventName)
{
    if (document.createEvent)
    {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent(eventName, true, true);

        return this.dispatchEvent(evt);
    }

    if (this.fireEvent)
        return this.fireEvent('on' + eventName);
}

//--

function showDimmer(){

	if (typeof jQuery == "undefined" || !jQuery) {
		// jQuery is not loaded
		console.log('jQuery is not loaded');
	}else{
		// jQuery is loaded		
		if (typeof jQuery.fn.dimmer == "undefined" || !jQuery.fn.dimmer) {
			// is not loaded
			console.log('jQuery.fn.dimmer is not loaded');
		}else{
			// is loaded
			jQuery('.page.dimmer:first').dimmer('show');
		}
	}

}

function hideDimmer(){

	if (typeof jQuery == "undefined" || !jQuery) {
		// jQuery is not loaded
		console.log('jQuery is not loaded');
	}else{
		// jQuery is loaded		
		if (typeof jQuery.fn.dimmer == "undefined" || !jQuery.fn.dimmer) {
			// is not loaded
			console.log('jQuery.fn.dimmer is not loaded');
		}else{
			// is loaded
			jQuery('.page.dimmer:first').dimmer('hide');
		}
	}

}

//---
var refreshIntervalId;

function beginRequestEventHandler(targetElement) {
	//
    var bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.style.cursor = "wait";

	//
	var count = 0;
	refreshIntervalId = setInterval(function(){
		++count;


		if (typeof Favico == "undefined" || !Favico) {
			// Favico is not loaded
			console.log('Favico is not loaded');
		}else{
			// Favico is loaded
			var favicon=new Favico({
				animation:'slide'
			});
			favicon.badge(count);
		}


	}, 1000);

	//
	if (typeof jQuery == "undefined" || !jQuery) {
		// jQuery is not loaded
		console.log('jQuery is not loaded');
	}else{
		// jQuery is loaded
		if (typeof NProgress == "undefined" || !NProgress) {
			// NProgress is not loaded
			console.log('NProgress is not loaded');
		}else{
			// NProgress is loaded
			NProgress.start();
		}
	}

	//
}

function endRequestEventHandler() {
	//
    var bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.style.cursor = "default";

	//
	clearInterval(refreshIntervalId);

	//
	if (typeof jQuery == "undefined" || !jQuery) {
		// jQuery is not loaded
		console.log('jQuery is not loaded');
	}else{
		// jQuery is loaded
		if (typeof NProgress == "undefined" || !NProgress) {
			// NProgress is not loaded
			console.log('NProgress is not loaded');
		}else{
			// NProgress is loaded
			NProgress.done();
		}
	}

	//
}

//---

//http://stackoverflow.com/questions/2390789/how-to-replace-all-points-in-a-string-in-javascript

/**
 * ReplaceAll by Fagner Brack (MIT Licensed)
 * Replaces all occurrences of a substring in a string
 */
String.prototype.replaceAll = function( token, newToken, ignoreCase ) {
    var _token;
    var str = this + "";
    var i = -1;

    if ( typeof token === "string" ) {

        if ( ignoreCase ) {

            _token = token.toLowerCase();

            while( (
                i = str.toLowerCase().indexOf(
                    token, i >= 0 ? i + newToken.length : 0
                ) ) !== -1
            ) {
                str = str.substring( 0, i ) +
                    newToken +
                    str.substring( i + token.length );
            }

        } else {
            return this.split( token ).join( newToken );
        }

    }
return str;
};

//---

if (typeof Product == 'undefined') {
    var Product = {};
}

if (Product.Config) {

/*
    Some of these override earlier varien/product.js methods, therefore
    varien/product.js must have been included prior to this file.
*/

Product.Config.prototype.getMatchingSimpleProduct = function(){
    var inScopeProductIds = this.getInScopeProductIds();
    if ((typeof inScopeProductIds != 'undefined') && (inScopeProductIds.length == 1)) {
        return inScopeProductIds[0];
    }
    return false;
};

/*
    Find products which are within consideration based on user's selection of
    config options so far
    Returns a normal array containing product ids
    allowedProducts is a normal numeric array containing product ids.
    childProducts is a hash keyed on product id
    optionalAllowedProducts lets you pass a set of products to restrict by,
    in addition to just using the ones already selected by the user
*/
Product.Config.prototype.getInScopeProductIds = function(optionalAllowedProducts) {

    var childProducts = this.config.childProducts;
    var allowedProducts = [];

    if ((typeof optionalAllowedProducts != 'undefined') && (optionalAllowedProducts.length > 0)) {
        // alert("starting with: " + optionalAllowedProducts.inspect());
        allowedProducts = optionalAllowedProducts;
    }

    for(var s=0, len=this.settings.length-1; s<=len; s++) {
        if (this.settings[s].selectedIndex <= 0){
            break;
        }
        var selected = this.settings[s].options[this.settings[s].selectedIndex];
        if (s==0 && allowedProducts.length == 0){
            allowedProducts = selected.config.allowedProducts;
        } else {
            // alert("merging: " + allowedProducts.inspect() + " with: " + selected.config.allowedProducts.inspect());
            allowedProducts = allowedProducts.intersect(selected.config.allowedProducts).uniq();
        // alert("to give: " + allowedProducts.inspect());
        }
    }

    //If we can't find any products (because nothing's been selected most likely)
    //then just use all product ids.
    if ((typeof allowedProducts == 'undefined') || (allowedProducts.length == 0)) {
        productIds = Object.keys(childProducts);
    } else {
        productIds = allowedProducts;
    }
    return productIds;
};

}


//---

// http://www.virtualgroup.com.br/javascript-funcao-de-espera-sleep/
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		//console.log(i);
		if ((new Date().getTime() - start) > milliseconds){
		break;
		}
	}
}

//---

//create function, it expects 2 values.
function insertAfter(newElement,targetElement) {
    //target is what you want it to go after. Look for this elements parent.
    var parent = targetElement.parentNode;
	//console.log(parent);
	//console.log(parent.lastchild);
	//console.log(targetElement);
    //if the parents lastchild is the targetElement...
    if(parent.lastchild == targetElement) {
    //add the newElement after the target element.
    parent.appendChild(newElement);
    } else {
    // else the target has siblings, insert the new element between the target and it's next sibling.
    parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

//---

//http://lawrence.ecorp.net/inet/samples/regexp-format.php
function cleanString (str) {
	return str.replace(/[^\d]/g, "");
}

//---

//http://thecodeabode.blogspot.com/2010/11/window-open-popup-blocker-detect-for.html

var PopupWarning = {

init : function()
{
	this.urlPopup = arguments[0];
	this.widthPopup = arguments[1];
	this.heightPopup = arguments[2];
	this.idPopup = arguments[3];

	var popups_are_disabled = this.popups_are_disabled();
	//alert(popups_are_disabled);
	if(popups_are_disabled == false)
	{ 
		//alert('Popup is NOT Blocked');
		this.redirect_to_action_page();		
	}else{
		//alert('Popup is Blocked');
		this.redirect_to_instruction_page();
	}
},

redirect_to_instruction_page : function()
{
	Dialog.confirm('Está ativado em seu navegador o recurso de bloqueio de popup, portanto clique no botão abaixo "Abrir Janela Popup" para abrir a nova janela.', {
		id: this.idPopup + '_' + Math.random(),
		className:'magento',
		title:'Aviso',
		width:400,
		height:100,
		zIndex: 2000,
		destroyOnClose: true,
		showEffect:Effect.BlindDown, 
		hideEffect: Effect.SwitchOff, 
		cancelLabel: "Cancelar", 
		okLabel: "Abrir janela Popup", 
		ok:function(win) { PopupWarning.redirect_to_action_page(); return true; },
		cancel:function(win) {  }
	});
},

redirect_to_action_page : function()
{
	window.open(this.urlPopup, this.idPopup, "toolbar=0,location=0,directories=0,status=1,menubar=1,titlebar=1,scrollbars=1,resizable=0,screenX=0,screenY=0,left=0,top=0,width=" + this.widthPopup + ",height=" + this.heightPopup + "");
},

popups_are_disabled : function()
{
	var popup = window.open("about:blank", "popup_tester", "width=1,height=1,left=0,top=0");
	if(!popup || popup.closed || typeof popup == 'undefined' || typeof popup.closed=='undefined' || popup.location=='about:blank')
	{
		return true;
	}

	window.focus();
	popup.blur();	

	//
	// Chrome popup detection requires that the popup validates itself - so we need to give
	// the popup time to load, then call js on the popup itself
	//
	if(navigator && (navigator.userAgent.toLowerCase()).indexOf("chrome") > -1)
	{			
		var on_load_test = function(){PopupWarning.test_chrome_popups(popup);};	
		var timer = setTimeout(on_load_test, 60);
		return;
	}

	popup.close();
	return false;
},

test_chrome_popups : function(popup)
{
	if(popup && popup.chrome_popups_permitted && popup.chrome_popups_permitted() == true)
	{			
		popup.close();
		return true;
	}

	//
	// If the popup js fails - popups are blocked
	//
	this.redirect_to_instruction_page();
}
};

var popupIsClosed = false;

function openPopupsCerebrum(urlPopup, typePopup, processPopup, titlePopup, idPopup) {

	if (document.body && document.body.offsetWidth) {
		widthPopup = document.body.offsetWidth;
		heightPopup = document.body.offsetHeight;
		console.log('widthPopup: ' + widthPopup + ' heightPopup: ' + heightPopup);
	}

	if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
		widthPopup = document.documentElement.offsetWidth;
		heightPopup = document.documentElement.offsetHeight;
		console.log('widthPopup: ' + widthPopup + ' heightPopup: ' + heightPopup);
	}

	if (window.innerWidth && window.innerHeight) {
		widthPopup = window.innerWidth;
		heightPopup = window.innerHeight;
		console.log('widthPopup: ' + widthPopup + ' heightPopup: ' + heightPopup);
	}

	widthPopup = 1010;
	heightPopup = heightPopup - 80;
	console.log('widthPopup: ' + widthPopup + ' heightPopup: ' + heightPopup);

	if (heightPopup > 600) {
		heightPopup = 600;
	}

	if (typePopup == 'WinXilinus'){

		contentWinCerebrum = new Window({
			id: "xilinus_window_magento_cerebrum_telencephalon_" + idPopup,
			className:'magento',
			title:'Processando, favor aguardar ...',
			//url:urlPopup,
			width:widthPopup,
			height:heightPopup,
			zIndex: 2000,
			destroyOnClose: true,
			//showEffect:Effect.BlindDown, 
			//hideEffect: Effect.SwitchOff, 
			onClose: function() { popupIsClosed = true; }
		});

		contentWinCerebrum.setStatusBar('<a href="'+urlPopup+'" target="_blank">'+urlPopup+'</a> &nbsp;&nbsp;&nbsp;&nbsp;'); 
		contentWinCerebrum.showCenter(true);

	    contentWinCerebrum.setURL(urlPopup);

		iframe = contentWinCerebrum.getContent();
		iframeId = iframe.id;

		var doc = iframe.contentWindow.document
		doc.body.style.backgroundColor = 'green';

		newElement = $('overlay-fade');

		clonnedElement = Element.clone(newElement, true);

		newElement = clonnedElement;
		targetElement = iframe;
		insertAfter(newElement,targetElement);

		document.getElementById('overlay-fade').style.display='block';

		iframe.onload = function() {
			document.getElementById('overlay-fade').style.display='none';

			contentWinCerebrum.setTitle(titlePopup);
		}

	}else{

		if (processPopup == 'window_load'){
			PopupWarning.init(urlPopup, widthPopup, heightPopup, idPopup);
		}else{
			window.open(urlPopup,idPopup,"toolbar=0,location=0,directories=0,status=1,menubar=1,titlebar=1,scrollbars=1,resizable=0,screenX=0,screenY=0,left=0,top=0,width=" + widthPopup + ",height=" + heightPopup + "");
		}

	}

}

//---

function loadJsCssfile(url, callback, filetype) {
	if (filetype == "js") {
		var fileref = document.createElement('script')
		fileref.setAttribute("type", "text/javascript")
		fileref.setAttribute("src", url)

		if (fileref.readyState){  //IE
		    fileref.onreadystatechange = function(){
		        if (fileref.readyState == "loaded" || fileref.readyState == "complete"){
		            fileref.onreadystatechange = null;
		            callback();
		        }
		    };
		} else {  //Others
		    fileref.onload = function(){
		        callback();
		    };
		}
	}
	else if (filetype == "css") {
		var fileref = document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", url)
	}
	if (typeof fileref != "undefined")
		document.getElementsByTagName("head")[0].appendChild(fileref)
}


//---

var url = 'https://j.maxmind.com/app/geoip.js';
var callback = function() {
console.log(geoip_country_code() + ' - ' + geoip_country_name() + ' - ' + geoip_city() + ' - ' + geoip_region_name() + ' - ' + geoip_latitude() + ' - ' + geoip_longitude() + ' - ' + ' - ' + geoip_postal_code());
};
var type = 'js';

//loadJsCssfile(url, callback, type);

//---


//---


//---


//---


//---

/**
 * Customers
 */

//---

// funcão para autocompletar o select box
function setSelected(select_box, value){
	//console.log(select_box);
	//console.log(value);
	for(var i = 0; i < select_box.options.length; i++){
	var curOpt = $(select_box.options[i]);
		//console.log(curOpt);
		//console.log(curOpt.text);
		//console.log(curOpt.value);
		if(curOpt.value == value)
		curOpt.selected = "selected";
	}
}

// funcão para autocompletar o select box
function selectEstado(select_box, value){
	// hash para o mapeamento UF => Nome Estado
	estados = new Hash({AC: "Acre", AL: "Alagoas", AP: "Amapá", AM: "Amazonas", BA: "Bahia", CE: "Ceará", ES: "Espírito Santo", GO: "Goiás", MA: "Maranhão", MT: "Mato Grosso", MS: "Mato Grosso do Sul", MG: "Minas Gerais", PA: "Pará", PB: "Paraíba", PR: "Paraná", PE: "Pernambuco", PI: "Piauí", RJ : "Rio de Janeiro", RN: "Rio Grande do Norte", RS: "Rio Grande do Sul", RO: "Rondônia", RR: "Roraima", SC: "Santa Catarina", SP: "São Paulo", SE: "Sergipe", TO: "Tocantins", DF: "Distrito Federal" });

	var estado = estados.get(value);
	var optionsLenght = select_box.options.length;

	for(var i = 0; i < optionsLenght; i++){
		var curOpt = $(select_box.options[i]);
		if(curOpt.text == estado){
			curOpt.selected = "selected";
			return curOpt;
		}
	}
}

//---

// ****************************************
// Script Gerador de CPF e CNPJ Válidos
// Autor: Marcos Guiga
// Site : Worldigital.co.cc
// Email: marcosguiga@hotmail.com
// Data:  19/12/2010
// ****************************************
// Função para gerar números randômicos
function gera_random(n)
{
    var ranNum = Math.round(Math.random()*n);
    return ranNum;
}

// Função para retornar o resto da divisao entre números (mod)
function mod(dividendo,divisor)
{
          return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

// Função que gera números de CPF válidos
function cpf()
{
          var n = 9;
          var n1 = gera_random(n);
           var n2 = gera_random(n);
           var n3 = gera_random(n);
           var n4 = gera_random(n);
           var n5 = gera_random(n);
           var n6 = gera_random(n);
           var n7 = gera_random(n);
           var n8 = gera_random(n);
           var n9 = gera_random(n);
           var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
           d1 = 11 - ( mod(d1,11) );
           if (d1>=10) d1 = 0;
           var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
           d2 = 11 - ( mod(d2,11) );
           if (d2>=10) d2 = 0;
           return ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
}

// Função que gera números de CNPJ válidos
function cnpj()
{
          var n = 9;
          var n1  = gera_random(n);
           var n2  = gera_random(n);
           var n3  = gera_random(n);
           var n4  = gera_random(n);
           var n5  = gera_random(n);
           var n6  = gera_random(n);
           var n7  = gera_random(n);
           var n8  = gera_random(n);
           var n9  = 0;//gera_random(n);
           var n10 = 0;//gera_random(n);
           var n11 = 0;//gera_random(n);
           var n12 = 1;//gera_random(n);
          var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
           d1 = 11 - ( mod(d1,11) );
           if (d1>=10) d1 = 0;
           var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
           d2 = 11 - ( mod(d2,11) );
           if (d2>=10) d2 = 0;
           return ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;
}

//---


//---



//---

/**
 * Payments
 */

//---

// Backend

var switcherPayment = Class.create({
	initialize: function(data) {
		console.log('initialize');

		if(!data) data = {};
		this.method  = data.method;
		this.url = data.url;
		Event.observe(window, 'load', this.updatePaymentMethod.bind(this));
	},
	updatePaymentMethod : function(){
		console.log('updatePaymentMethod');

		if($('edit_form')){
		    var radio;
		    if (radio = $('edit_form').getInputs('radio','payment[method]').find(function(radio){ return radio.checked; })){
				console.log(radio.value);
		        if (radio.value == 'cashondelivery' || radio.value.indexOf("cerebrum") ){
		            this.switchPaymentMethod(radio.value);
		        }
		    }
		}
	},
	switchPaymentMethod : function(method){
		console.log(method);

		//Cerebrum.preparePayment(method,this.url);

		//support cashondelivery
		/*if($('edit_form')){
		    order.setPaymentMethod(method);
		    var data = {};
		    data['order[payment_method]'] = method;
		    order.loadArea(['totals'], true, data);
		}*/
		//support cashondelivery
	},
	speak: function() {
		console.log(this.method + " says: " + this.url + "!");
	}
});

if($('edit_form')){
	var switcherPayment = new switcherPayment();
}

// 

//

// FIX: IWD_OnepageCheckout - Reloader Review -> 2 Discounts
function initCheckoutUpdate(JSON_CHECKOUT) {
	//console.log(checkout);

	showDimmer();

	//beginRequestEventHandler();

	if(checkout.loadWaiting != false){
	    return setTimeout(function() {
			initCheckoutUpdate(JSON_CHECKOUT);
		}, 1000);
	}

	checkoutUpdate(JSON_CHECKOUT);
}

function checkoutUpdate(JSON_CHECKOUT) {
	console.log(JSON_CHECKOUT);
	checkout.update(JSON_CHECKOUT);
}

function waitForCheckoutUpdate(JSON_CHECKOUT) {
	//console.log(checkout.loadWaiting);
	if(checkout.loadWaiting != false){
	    return setTimeout(function() {
			waitForCheckoutUpdate(JSON_CHECKOUT);
		}, 1000);
	}

	checkoutUpdate(JSON_CHECKOUT);
	waitForCheckoutUpdateAfter(JSON_CHECKOUT);
}

function waitForCheckoutUpdateAfter(JSON_CHECKOUT) {
	//console.log(checkout.loadWaiting);
	if(checkout.loadWaiting != false){

	    return setTimeout(function() {
			waitForCheckoutUpdateAfter(JSON_CHECKOUT);
		}, 1000);
	}

	hideDimmer();

	//endRequestEventHandler();

}

// FIX: IWD_OnepageCheckout - Reloader Review -> 2 Installments
function ItemInstallments_CheckoutTelencephalon(event, element){

	//console.log(event);
	//console.log(element);

	if (typeof element == "undefined" || !element) {
		return;
	}

	var element_name = element.name;
	var element_value = element.value;

	if( element_name.indexOf('cc_installments') == -1 ){
		return;
	}

	console.log('ItemInstallments_CheckoutTelencephalon');

	//console.log(element_name);
	//console.log(element_value);

	new Ajax.Request( URLSAVE, {
		method: 'get',
		asynchronous: false,
		parameters: 'elm='+encodeURIComponent(false)+'&v='+encodeURIComponent(element_value),
		onCreate: function(transport) {
			beginRequestEventHandler();
		},
		onComplete: function(transport) {
		    endRequestEventHandler();

			JSON_CHECKOUT = {
				'process_coupon': 1,
				'review': 1
			};

			console.log( 'isVisible: ' + isVisible($('billing:postcode')) );
			//if( !isVisible($('billing:postcode')) ){ // Fix: Atualização do 'Review' onde é exibido os Juros só deve funcionar com usuario logado, quando deslogado está sendo atualzado o bloco dos métodos de pagamentos perdendo os dados selecionados
				initCheckoutUpdate(JSON_CHECKOUT);
				waitForCheckoutUpdate(JSON_CHECKOUT);
			//}
		}
	});

}

//---

function CheckoutTelencephalon(){

	var GET_element_payment_method = document.getElementsByName('payment[method]');
	//console.log(GET_element_payment_method.length);
	for ( var i = 0; i < GET_element_payment_method.length ; i++ ) {
		element_item = GET_element_payment_method.item(i);
		element_item_name = element_item.name;
		element_item_value = element_item.value;
		//console.log(element_item);
		//console.log(element_item.checked);
		//console.log(element_item_value.indexOf("cerebrum_"));

		if( element_item.checked == false ){
			continue;
		}

		if( element_item_value.indexOf("cerebrum_") != -1 ){
			//console.log('ItemCheckoutTelencephalon');
			Telencephalon_Checkout_Method(false, element_item);
		}
	}
}

function Telencephalon_Checkout_Method(event, element){

    //console.log(event);
    //console.log(element);

	var element_method = element.value;
	var element_name_bandeira = 'payment[cc_type__' + element_method + ']';
	var element_name_parcela = 'payment[cc_installments__' + element_method + ']';

	var element_form = element.form;
	var form_id = element_form.id;

	console.log('Telencephalon_Checkout_Method');

	var GET_element_name_parcela = document.getElementsByName(element_name_parcela);
	if (GET_element_name_parcela.length > 0){
		element_item = GET_element_name_parcela.item(0);
		element_type = element_item.nodeName;
	}

	if( isNull(GET_element_name_parcela.item(0)) ){
		return;
	}

	console.log('ADICIONA VALIDADOR BANDEIRA ESPECIFICA: ' + element_name_bandeira);
	var GET_element_name_bandeira = document.getElementsByName(element_name_bandeira);
	for ( var i = 0; i < GET_element_name_bandeira.length ; i++ ) {
		element_item = GET_element_name_bandeira.item(i);
		if (element_type == 'SELECT'){
			element_item.selectedIndex = 0;
			element_item.addClassName("required-entry");
		}else{
			element_item.checked = false;
			element_item.addClassName("validate-one-required-by-name");
		}
		//console.log(element_item);
	}

	var elements_group_class_parcela = '.cc-installments-' + element_method;
	console.log('ESCONDE PARCELAS: ' + elements_group_class_parcela);
	$$(elements_group_class_parcela).each(
		function (evt) {
			console.log(evt);
			//evt.setStyle({display:'none'});
			evt.hide();
		} 
	);
	
	if (element_type == 'SELECT'){
		var element_storage = getSelectValue(document.forms[form_id].elements[element_name_parcela]);
	}else{
		var element_storage = getCheckedValue(document.forms[form_id].elements[element_name_parcela]);
	}
	//console.log(element_storage);
	if( !isNull(element_storage) ){
		console.log('REMOVE VALIDADOR PARCELAS');
		for ( var i = 0; i < GET_element_name_parcela.length ; i++ ) {
			element_item = GET_element_name_parcela.item(i);
			element_item_name = element_item.name;
			element_item_value = element_item.value;
			if (element_type == 'SELECT'){
				element_item.selectedIndex = 0;
				element_item.removeClassName("required-entry");
			}else{
				element_item.checked = false;
				element_item.removeClassName("validate-one-required-by-name");
			}

			//console.log(element_item);
		}
	}

	return element;

}

function Telencephalon_Checkout_Type(event, element){

    //console.log(event);
    //console.log(element);

	var element_method = element.title;
	var element_form = element.form;
	var form_id = element_form.id;


	var elements_group_class_parcela = '.cc-installments-' + element_method;
	console.log('ESCONDE PARCELAS: ' + elements_group_class_parcela);
	$$(elements_group_class_parcela).each(
		function (evt) {
			console.log(evt);
			//evt.setStyle({display:'none'});
			evt.hide();
		} 
	);
	
	if (element_type == 'SELECT'){
		var element_storage = getSelectValue(document.forms[form_id].elements[element_name_parcela]);
	}else{
		var element_storage = getCheckedValue(document.forms[form_id].elements[element_name_parcela]);
	}
	//console.log(element_storage);
	if( !isNull(element_storage) ){
		console.log('REMOVE VALIDADOR PARCELAS');
		for ( var i = 0; i < GET_element_name_parcela.length ; i++ ) {
			element_item = GET_element_name_parcela.item(i);
			element_item_name = element_item.name;
			element_item_value = element_item.value;
			if (element_type == 'SELECT'){
				element_item.selectedIndex = 0;
				element_item.removeClassName("required-entry");
			}else{
				element_item.checked = false;
				element_item.removeClassName("validate-one-required-by-name");
			}

			//console.log(element_item);
		}
	}



	var element_name_parcela = 'payment[cc_installments__' + element_method + ']';
	var GET_element_name_parcela = document.getElementsByName(element_name_parcela);
	if (GET_element_name_parcela.length > 0){
		element_item = GET_element_name_parcela.item(0);
		element_type = element_item.nodeName;
	}

	var element_value = element.value;

	if( isNull(element_value) ){
		return;
	}

	console.log(element_value);
	console.log(element_method);

	if( (element_method == 'cerebrum_cielo') && $('cerebrum_cielo_cc_number') ){
		if(element_value == 'aura'){
			$('cerebrum_cielo_cc_number').maxLength = 19;
		}else{
			$('cerebrum_cielo_cc_number').maxLength = 16;
		}
	}

	var element_class_parcela = '.' + element_method + '-' + element_value + '-li-cc-installments';
	console.log('EXIBE BLOCO PARCELA ESPECIFICA: ' + element_class_parcela);
	$$(element_class_parcela).each(
		function (evt) {
			console.log(evt);
			//evt.setStyle({display:'inline'});
			evt.show();
		} 
	);

	console.log('ADICIONA VALIDADOR PARCELA ESPECIFICA');
	for ( var i = 0; i < GET_element_name_parcela.length ; i++ ) {
		element_item = GET_element_name_parcela.item(i);
		element_item_name = element_item.name;
		element_item_value = element_item.value;
		element_parentNode = element_item.parentNode.parentNode.parentNode;
		element_class_parentNode = element_parentNode.className;
		//console.log(element_parentNode);
		//console.log(element_class_parentNode);

		if( element_class_parentNode.indexOf(element_value+'-') != -1 ){
			if (element_type == 'SELECT'){
				element_item.addClassName("required-entry");
			}else{
				element_item.addClassName("validate-one-required-by-name");
			}

			element_item.disabled = false;

			//console.log(element_parentNode);
			//console.log(element_class_parentNode);
			//console.log(element_item);
		}else{
			element_item.disabled = true;
		}
	}

}

//---

//document.on('change', '', function(event, element) {
jQuery( document ).on( 'change', function( event ) {

	//return ;
    //console.log(event);
    //console.log(element);

	element = event.target;

	//

	element_type = element.nodeName;
	if (element_type == 'SELECT'){
	}else{
		return ;
	}

	//

	element_name = element.name;
	element_value = element.value;

	if( element_name.indexOf("payment[cc_type__cerebrum_") != -1 ){
		Telencephalon_Checkout_Type(event, element);
	}

	//

});

//document.on('click', '', function(event, element) {
jQuery( document ).on( 'click', function( event ) {

	//return ;
    //console.log(event);
    //console.log(element);

	element = event.target;

	//

	element_type = element.nodeName;
	if (element_type == 'INPUT'){
	}else{
		return ;
	}

	//

	element_name = element.name;
	element_value = element.value;

	if( element_name == 'payment[method]' ){
		if( element_value.indexOf("cerebrum") != -1 ){
			Telencephalon_Checkout_Method(event, element);
		}
	}

	//

	if( element_name.indexOf("payment[cc_type__cerebrum_") != -1 ){
		Telencephalon_Checkout_Type(event, element);
	}

	// ....
	

});

//---

function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

//---

function numbersonly(field, event)
{
	var unicode = event.charCode ? event.charCode : event.keyCode
	if (unicode != 8){ //if the key isn't the backspace key (which we should allow)
	if (unicode < 48 || unicode > 57) //if not a number
	return false //disable key press
	}
}

//---
console.log(this);
//---

