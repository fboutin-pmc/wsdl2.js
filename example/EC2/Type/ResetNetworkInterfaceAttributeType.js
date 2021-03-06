var Modeler = require("../Modeler.js");
var className = 'TypeResetNetworkInterfaceAttributeType';

var TypeResetNetworkInterfaceAttributeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  networkInterfaceId: {
      type: "string",
      wsdlDefinition: {
        name: "networkInterfaceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeResetNetworkInterfaceAttributeType;
Modeler.register(TypeResetNetworkInterfaceAttributeType, "TypeResetNetworkInterfaceAttributeType");
