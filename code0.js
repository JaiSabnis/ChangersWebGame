gdjs.MenuCode = {};
gdjs.MenuCode.GDBaseObjects1= [];
gdjs.MenuCode.GDBaseObjects2= [];
gdjs.MenuCode.GDBaseObjects3= [];
gdjs.MenuCode.GDBaseObjects4= [];
gdjs.MenuCode.GDMainObjects1= [];
gdjs.MenuCode.GDMainObjects2= [];
gdjs.MenuCode.GDMainObjects3= [];
gdjs.MenuCode.GDMainObjects4= [];
gdjs.MenuCode.GDGroundObjects1= [];
gdjs.MenuCode.GDGroundObjects2= [];
gdjs.MenuCode.GDGroundObjects3= [];
gdjs.MenuCode.GDGroundObjects4= [];
gdjs.MenuCode.GDCHANGEObjects1= [];
gdjs.MenuCode.GDCHANGEObjects2= [];
gdjs.MenuCode.GDCHANGEObjects3= [];
gdjs.MenuCode.GDCHANGEObjects4= [];
gdjs.MenuCode.GDleftBoxObjects1= [];
gdjs.MenuCode.GDleftBoxObjects2= [];
gdjs.MenuCode.GDleftBoxObjects3= [];
gdjs.MenuCode.GDleftBoxObjects4= [];
gdjs.MenuCode.GDcrocGunObjects1= [];
gdjs.MenuCode.GDcrocGunObjects2= [];
gdjs.MenuCode.GDcrocGunObjects3= [];
gdjs.MenuCode.GDcrocGunObjects4= [];
gdjs.MenuCode.GDbombObjects1= [];
gdjs.MenuCode.GDbombObjects2= [];
gdjs.MenuCode.GDbombObjects3= [];
gdjs.MenuCode.GDbombObjects4= [];
gdjs.MenuCode.GDstarObjects1= [];
gdjs.MenuCode.GDstarObjects2= [];
gdjs.MenuCode.GDstarObjects3= [];
gdjs.MenuCode.GDstarObjects4= [];
gdjs.MenuCode.GDappleObjects1= [];
gdjs.MenuCode.GDappleObjects2= [];
gdjs.MenuCode.GDappleObjects3= [];
gdjs.MenuCode.GDappleObjects4= [];
gdjs.MenuCode.GDfireballObjects1= [];
gdjs.MenuCode.GDfireballObjects2= [];
gdjs.MenuCode.GDfireballObjects3= [];
gdjs.MenuCode.GDfireballObjects4= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStartObjects3= [];
gdjs.MenuCode.GDStartObjects4= [];
gdjs.MenuCode.GDChangersObjects1= [];
gdjs.MenuCode.GDChangersObjects2= [];
gdjs.MenuCode.GDChangersObjects3= [];
gdjs.MenuCode.GDChangersObjects4= [];
gdjs.MenuCode.GDskyObjects1= [];
gdjs.MenuCode.GDskyObjects2= [];
gdjs.MenuCode.GDskyObjects3= [];
gdjs.MenuCode.GDskyObjects4= [];
gdjs.MenuCode.GDcloudObjects1= [];
gdjs.MenuCode.GDcloudObjects2= [];
gdjs.MenuCode.GDcloudObjects3= [];
gdjs.MenuCode.GDcloudObjects4= [];
gdjs.MenuCode.GDscoreNameObjects1= [];
gdjs.MenuCode.GDscoreNameObjects2= [];
gdjs.MenuCode.GDscoreNameObjects3= [];
gdjs.MenuCode.GDscoreNameObjects4= [];
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];
gdjs.MenuCode.GDNewObjectObjects3= [];
gdjs.MenuCode.GDNewObjectObjects4= [];
gdjs.MenuCode.GDHscoreObjects1= [];
gdjs.MenuCode.GDHscoreObjects2= [];
gdjs.MenuCode.GDHscoreObjects3= [];
gdjs.MenuCode.GDHscoreObjects4= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.MenuCode.GDStartObjects1});gdjs.MenuCode.eventsList0xc549bc = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects2.createFrom(gdjs.MenuCode.GDMainObjects1);


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("minoRun");
}
}}

}


{

/* Reuse gdjs.MenuCode.GDMainObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMainObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects1[k] = gdjs.MenuCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects1[i].setAnimationName("minoIdle");
}
}}

}


}; //End of gdjs.MenuCode.eventsList0xc549bc
gdjs.MenuCode.eventsList0xc548a4 = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects1.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects1[k] = gdjs.MenuCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc549bc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xc548a4
gdjs.MenuCode.eventsList0xc5371c = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12925092);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("minoOuch");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12925724);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("minoOuch");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("minoHit");
}
}}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("minoJump");
}
}}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("minoHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "left";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("minoHit")) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("minoHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "right";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("minoHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].hasAnimationEnded() ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("minoIdle");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc548a4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xc5371c
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbombObjects2Objects = Hashtable.newFrom({"bomb": gdjs.MenuCode.GDbombObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbombObjects2Objects = Hashtable.newFrom({"bomb": gdjs.MenuCode.GDbombObjects2});gdjs.MenuCode.eventsList0xc562fc = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects2.createFrom(gdjs.MenuCode.GDMainObjects1);


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("boyRun");
}
}}

}


{

/* Reuse gdjs.MenuCode.GDMainObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMainObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects1[k] = gdjs.MenuCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects1[i].setAnimationName("boyIdle");
}
}}

}


}; //End of gdjs.MenuCode.eventsList0xc562fc
gdjs.MenuCode.eventsList0xc561e4 = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects1.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects1[k] = gdjs.MenuCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc562fc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xc561e4
gdjs.MenuCode.eventsList0xc5505c = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12931556);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("boyOuch");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12932188);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("boyOuch");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "left";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
gdjs.MenuCode.GDbombObjects2.length = 0;

{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("boyHit");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbombObjects2Objects, (( gdjs.MenuCode.GDMainObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMainObjects2[0].getPointX("")) + 45, (( gdjs.MenuCode.GDMainObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMainObjects2[0].getPointY("")), "Shooter");
}{for(var i = 0, len = gdjs.MenuCode.GDbombObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDbombObjects2[i].addForce(-(300), 0, 1);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "right";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
gdjs.MenuCode.GDbombObjects2.length = 0;

{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("boyHit");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbombObjects2Objects, (( gdjs.MenuCode.GDMainObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMainObjects2[0].getPointX("")) + 52, (( gdjs.MenuCode.GDMainObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMainObjects2[0].getPointY("")), "Shooter");
}{for(var i = 0, len = gdjs.MenuCode.GDbombObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDbombObjects2[i].addForce(300, 0, 1);
}
}}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("boyJump");
}
}}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("boyHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].hasAnimationEnded() ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("boyIdle");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc561e4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xc5505c
gdjs.MenuCode.eventsList0xc57c8c = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects2.createFrom(gdjs.MenuCode.GDMainObjects1);


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("pirateRun");
}
}}

}


{

/* Reuse gdjs.MenuCode.GDMainObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMainObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects1[k] = gdjs.MenuCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects1[i].setAnimationName("pirateIdle");
}
}}

}


}; //End of gdjs.MenuCode.eventsList0xc57c8c
gdjs.MenuCode.eventsList0xc57b74 = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects1.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects1[k] = gdjs.MenuCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc57c8c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xc57b74
gdjs.MenuCode.eventsList0xc56914 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12937884);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("pirateOuch");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12938540);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("pirateOuch");
}
}}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("pirateJump");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("pirateHit");
}
}}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("pirateHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "right";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("pirateHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "left";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("pirateHit")) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("pirateHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].hasAnimationEnded() ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("pirateIdle");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc57b74(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xc56914
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDstarObjects2Objects = Hashtable.newFrom({"star": gdjs.MenuCode.GDstarObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDstarObjects2Objects = Hashtable.newFrom({"star": gdjs.MenuCode.GDstarObjects2});gdjs.MenuCode.eventsList0xc596a4 = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects2.createFrom(gdjs.MenuCode.GDMainObjects1);


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("lancerRun");
}
}}

}


{

/* Reuse gdjs.MenuCode.GDMainObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMainObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects1[k] = gdjs.MenuCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects1[i].setAnimationName("lancerIdle");
}
}}

}


}; //End of gdjs.MenuCode.eventsList0xc596a4
gdjs.MenuCode.eventsList0xc5958c = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects1.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects1[k] = gdjs.MenuCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc596a4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xc5958c
gdjs.MenuCode.eventsList0xc5835c = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12944612);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("lancerOuch");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12945268);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("lancerOuch");
}
}}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("lancerJump");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "left";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
gdjs.MenuCode.GDstarObjects2.length = 0;

{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("lancerHit");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDstarObjects2Objects, (( gdjs.MenuCode.GDMainObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMainObjects2[0].getPointX("")) + 45, (( gdjs.MenuCode.GDMainObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMainObjects2[0].getPointY("")), "Shooter");
}{for(var i = 0, len = gdjs.MenuCode.GDstarObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDstarObjects2[i].addForce(-(250), 0, 1);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "right";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
gdjs.MenuCode.GDstarObjects2.length = 0;

{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("lancerHit");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDstarObjects2Objects, (( gdjs.MenuCode.GDMainObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMainObjects2[0].getPointX("")) + 52, (( gdjs.MenuCode.GDMainObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMainObjects2[0].getPointY("")), "Shooter");
}{for(var i = 0, len = gdjs.MenuCode.GDstarObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDstarObjects2[i].addForce(250, 0, 1);
}
}}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("lancerHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].hasAnimationEnded() ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("lancerIdle");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc5958c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xc5835c
gdjs.MenuCode.eventsList0xc5a964 = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects3.createFrom(gdjs.MenuCode.GDMainObjects2);


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects3[i].isCurrentAnimationName("kingHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects3[k] = gdjs.MenuCode.GDMainObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects3.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "left";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
}

}


{

/* Reuse gdjs.MenuCode.GDMainObjects2 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("kingHit")) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.MenuCode.eventsList0xc5a964
gdjs.MenuCode.eventsList0xc5b564 = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects2.createFrom(gdjs.MenuCode.GDMainObjects1);


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("kingRun");
}
}}

}


{

/* Reuse gdjs.MenuCode.GDMainObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMainObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects1[k] = gdjs.MenuCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects1[i].setAnimationName("kingIdle");
}
}}

}


}; //End of gdjs.MenuCode.eventsList0xc5b564
gdjs.MenuCode.eventsList0xc5b44c = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects1.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects1[k] = gdjs.MenuCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc5b564(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xc5b44c
gdjs.MenuCode.eventsList0xc59cec = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12951156);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("kingOuch");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12951788);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("kingOuch");
}
}}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("kingJump");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("kingHit");
}
}}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("kingHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].hasAnimationEnded() ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("kingIdle");
}
}}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("kingHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "right";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc5a964(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("kingHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "right";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("kingHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "left";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("kingHit")) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc5b44c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xc59cec
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDcrocGunObjects2Objects = Hashtable.newFrom({"crocGun": gdjs.MenuCode.GDcrocGunObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDcrocGunObjects2Objects = Hashtable.newFrom({"crocGun": gdjs.MenuCode.GDcrocGunObjects2});gdjs.MenuCode.eventsList0xc5cc2c = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects2.createFrom(gdjs.MenuCode.GDMainObjects1);


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("crocRun");
}
}}

}


{

/* Reuse gdjs.MenuCode.GDMainObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMainObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects1[k] = gdjs.MenuCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects1[i].setAnimationName("crocIdle");
}
}}

}


}; //End of gdjs.MenuCode.eventsList0xc5cc2c
gdjs.MenuCode.eventsList0xc5cb4c = function(runtimeScene) {

{

gdjs.MenuCode.GDMainObjects1.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects1[k] = gdjs.MenuCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc5cc2c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xc5cb4c
gdjs.MenuCode.eventsList0xc5bb7c = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12958980);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("crocOuch");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12959612);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("crocOuch");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "right";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
gdjs.MenuCode.GDcrocGunObjects2.length = 0;

{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("crocHit");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDcrocGunObjects2Objects, (( gdjs.MenuCode.GDMainObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMainObjects2[0].getPointX("")) + 45, (( gdjs.MenuCode.GDMainObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMainObjects2[0].getPointY("")) + 25, "Shooter");
}{for(var i = 0, len = gdjs.MenuCode.GDcrocGunObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDcrocGunObjects2[i].addForce(-(500), 0, 1);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("mainDirection")) == "left";
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));
gdjs.MenuCode.GDcrocGunObjects2.length = 0;

{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("crocHit");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDcrocGunObjects2Objects, (( gdjs.MenuCode.GDMainObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMainObjects2[0].getPointX("")) + 52, (( gdjs.MenuCode.GDMainObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMainObjects2[0].getPointY("")) + 25, "Shooter");
}{for(var i = 0, len = gdjs.MenuCode.GDcrocGunObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDcrocGunObjects2[i].addForce(500, 0, 1);
}
}}

}


{

gdjs.MenuCode.GDMainObjects2.createFrom(runtimeScene.getObjects("Main"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].isCurrentAnimationName("crocHit") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMainObjects2[i].hasAnimationEnded() ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDMainObjects2[k] = gdjs.MenuCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMainObjects2.length = k;}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMainObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMainObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMainObjects2[i].setAnimationName("crocIdle");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc5cb4c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xc5bb7c
gdjs.MenuCode.eventsList0xc5dbbc = function(runtimeScene) {

{


{
}

}


{


{
}

}


{


{
{runtimeScene.getVariables().get("Enemy1Dead").sub(1);
}}

}


{


{
gdjs.MenuCode.GDcrocGunObjects2.createFrom(runtimeScene.getObjects("crocGun"));
{runtimeScene.getVariables().get("Enemy1Dead").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDcrocGunObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDcrocGunObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.MenuCode.GDbombObjects2.createFrom(runtimeScene.getObjects("bomb"));
{runtimeScene.getVariables().get("Enemy1Dead").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDbombObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDbombObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.MenuCode.GDstarObjects2.createFrom(runtimeScene.getObjects("star"));
{runtimeScene.getVariables().get("Enemy1Dead").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDstarObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDstarObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Enemy1Dead")) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Enemy1Dead").setNumber(5);
}}

}


}; //End of gdjs.MenuCode.eventsList0xc5dbbc
gdjs.MenuCode.eventsList0xc5ea1c = function(runtimeScene) {

{


{
}

}


{


{
}

}


{


{
{runtimeScene.getVariables().get("Enemy2Dead").sub(1);
}}

}


{


{
gdjs.MenuCode.GDcrocGunObjects2.createFrom(runtimeScene.getObjects("crocGun"));
{runtimeScene.getVariables().get("Enemy2Dead").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDcrocGunObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDcrocGunObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.MenuCode.GDbombObjects2.createFrom(runtimeScene.getObjects("bomb"));
{runtimeScene.getVariables().get("Enemy2Dead").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDbombObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDbombObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.MenuCode.GDstarObjects2.createFrom(runtimeScene.getObjects("star"));
{runtimeScene.getVariables().get("Enemy2Dead").sub(1);
}{for(var i = 0, len = gdjs.MenuCode.GDstarObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDstarObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Enemy2Dead")) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Enemy2Dead").setNumber(5);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) >= 2;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) < 2.05;
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDfireballObjects2.createFrom(runtimeScene.getObjects("fireball"));
{for(var i = 0, len = gdjs.MenuCode.GDfireballObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDfireballObjects2[i].setScale(2);
}
}{for(var i = 0, len = gdjs.MenuCode.GDfireballObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDfireballObjects2[i].addPolarForce(0, 100, 1);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) >= 7;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) < 7.05;
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDfireballObjects1.createFrom(runtimeScene.getObjects("fireball"));
{for(var i = 0, len = gdjs.MenuCode.GDfireballObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDfireballObjects1[i].setScale(2);
}
}{for(var i = 0, len = gdjs.MenuCode.GDfireballObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDfireballObjects1[i].addPolarForce(0, 100, 1);
}
}}

}


}; //End of gdjs.MenuCode.eventsList0xc5ea1c
gdjs.MenuCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDChangersObjects1.createFrom(runtimeScene.getObjects("Changers"));
gdjs.MenuCode.GDleftBoxObjects1.createFrom(runtimeScene.getObjects("leftBox"));
{for(var i = 0, len = gdjs.MenuCode.GDleftBoxObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDleftBoxObjects1[i].hide();
}
}{runtimeScene.getVariables().get("charMode").setNumber(4);
}{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 0);
}{for(var i = 0, len = gdjs.MenuCode.GDChangersObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDChangersObjects1[i].setOutline("0;0;0", 3);
}
}{for(var i = 0, len = gdjs.MenuCode.GDChangersObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDChangersObjects1[i].setGradient("LINEAR_HORIZONTAL", "252;17;17", "209;36;36", "133;51;51", "92;81;81");
}
}{runtimeScene.getGame().getVariables().get("Score").setNumber(0);
}{runtimeScene.getVariables().get("Time").setNumber(0);
}}

}


{


{
{runtimeScene.getVariables().get("Time").add(1 / 60);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Saved", "HScore");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Saved", "HScore", runtimeScene, runtimeScene.getVariables().get("highScore"));
}{runtimeScene.getVariables().get("highScore").setNumber(20);
}{runtimeScene.getGame().getVariables().get("HScore").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("highScore")));
}}

}


{


{
gdjs.MenuCode.GDHscoreObjects1.createFrom(runtimeScene.getObjects("Hscore"));
{for(var i = 0, len = gdjs.MenuCode.GDHscoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHscoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("HScore"))));
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) <= 1;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDChangersObjects1.createFrom(runtimeScene.getObjects("Changers"));
{for(var i = 0, len = gdjs.MenuCode.GDChangersObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDChangersObjects1[i].setGradient("LINEAR_HORIZONTAL", "252;17;17", "245;166;35", "248;231;28", "126;211;33");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) <= 2;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) > 1;
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDChangersObjects1.createFrom(runtimeScene.getObjects("Changers"));
{for(var i = 0, len = gdjs.MenuCode.GDChangersObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDChangersObjects1[i].setGradient("LINEAR_HORIZONTAL", "245;166;35", "248;231;28", "126;211;33", "252;17;17");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) <= 3;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) > 2;
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDChangersObjects1.createFrom(runtimeScene.getObjects("Changers"));
{for(var i = 0, len = gdjs.MenuCode.GDChangersObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDChangersObjects1[i].setGradient("LINEAR_HORIZONTAL", "248;231;28", "126;211;33", "208;2;27", "245;166;35");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) <= 4;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) > 3;
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDChangersObjects1.createFrom(runtimeScene.getObjects("Changers"));
{for(var i = 0, len = gdjs.MenuCode.GDChangersObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDChangersObjects1[i].setGradient("LINEAR_HORIZONTAL", "126;211;33", "208;2;27", "245;166;35", "248;231;28");
}
}{runtimeScene.getVariables().get("Time").setNumber(0);
}}

}


{

gdjs.MenuCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("sceneChange").setNumber(gdjs.randomInRange(1, 4));
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("charMode")) == 1;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc5371c(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("charMode")) == 2;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc5505c(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("charMode")) == 3;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc56914(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("charMode")) == 4;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc5835c(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("charMode")) == 5;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc59cec(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("charMode")) == 6;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xc5bb7c(runtimeScene);} //End of subevents
}

}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Enemy1"); }gdjs.MenuCode.eventsList0xc5dbbc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Enemy1"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Enemy2"); }gdjs.MenuCode.eventsList0xc5ea1c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Enemy2"); }
}


{


{
}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("sceneChange")) == 1;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Castle", false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("sceneChange")) == 2;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "City", false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("sceneChange")) == 3;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jungle", false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("sceneChange")) == 4;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mod", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0xb4be0


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBaseObjects1.length = 0;
gdjs.MenuCode.GDBaseObjects2.length = 0;
gdjs.MenuCode.GDBaseObjects3.length = 0;
gdjs.MenuCode.GDBaseObjects4.length = 0;
gdjs.MenuCode.GDMainObjects1.length = 0;
gdjs.MenuCode.GDMainObjects2.length = 0;
gdjs.MenuCode.GDMainObjects3.length = 0;
gdjs.MenuCode.GDMainObjects4.length = 0;
gdjs.MenuCode.GDGroundObjects1.length = 0;
gdjs.MenuCode.GDGroundObjects2.length = 0;
gdjs.MenuCode.GDGroundObjects3.length = 0;
gdjs.MenuCode.GDGroundObjects4.length = 0;
gdjs.MenuCode.GDCHANGEObjects1.length = 0;
gdjs.MenuCode.GDCHANGEObjects2.length = 0;
gdjs.MenuCode.GDCHANGEObjects3.length = 0;
gdjs.MenuCode.GDCHANGEObjects4.length = 0;
gdjs.MenuCode.GDleftBoxObjects1.length = 0;
gdjs.MenuCode.GDleftBoxObjects2.length = 0;
gdjs.MenuCode.GDleftBoxObjects3.length = 0;
gdjs.MenuCode.GDleftBoxObjects4.length = 0;
gdjs.MenuCode.GDcrocGunObjects1.length = 0;
gdjs.MenuCode.GDcrocGunObjects2.length = 0;
gdjs.MenuCode.GDcrocGunObjects3.length = 0;
gdjs.MenuCode.GDcrocGunObjects4.length = 0;
gdjs.MenuCode.GDbombObjects1.length = 0;
gdjs.MenuCode.GDbombObjects2.length = 0;
gdjs.MenuCode.GDbombObjects3.length = 0;
gdjs.MenuCode.GDbombObjects4.length = 0;
gdjs.MenuCode.GDstarObjects1.length = 0;
gdjs.MenuCode.GDstarObjects2.length = 0;
gdjs.MenuCode.GDstarObjects3.length = 0;
gdjs.MenuCode.GDstarObjects4.length = 0;
gdjs.MenuCode.GDappleObjects1.length = 0;
gdjs.MenuCode.GDappleObjects2.length = 0;
gdjs.MenuCode.GDappleObjects3.length = 0;
gdjs.MenuCode.GDappleObjects4.length = 0;
gdjs.MenuCode.GDfireballObjects1.length = 0;
gdjs.MenuCode.GDfireballObjects2.length = 0;
gdjs.MenuCode.GDfireballObjects3.length = 0;
gdjs.MenuCode.GDfireballObjects4.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDStartObjects4.length = 0;
gdjs.MenuCode.GDChangersObjects1.length = 0;
gdjs.MenuCode.GDChangersObjects2.length = 0;
gdjs.MenuCode.GDChangersObjects3.length = 0;
gdjs.MenuCode.GDChangersObjects4.length = 0;
gdjs.MenuCode.GDskyObjects1.length = 0;
gdjs.MenuCode.GDskyObjects2.length = 0;
gdjs.MenuCode.GDskyObjects3.length = 0;
gdjs.MenuCode.GDskyObjects4.length = 0;
gdjs.MenuCode.GDcloudObjects1.length = 0;
gdjs.MenuCode.GDcloudObjects2.length = 0;
gdjs.MenuCode.GDcloudObjects3.length = 0;
gdjs.MenuCode.GDcloudObjects4.length = 0;
gdjs.MenuCode.GDscoreNameObjects1.length = 0;
gdjs.MenuCode.GDscoreNameObjects2.length = 0;
gdjs.MenuCode.GDscoreNameObjects3.length = 0;
gdjs.MenuCode.GDscoreNameObjects4.length = 0;
gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;
gdjs.MenuCode.GDNewObjectObjects3.length = 0;
gdjs.MenuCode.GDNewObjectObjects4.length = 0;
gdjs.MenuCode.GDHscoreObjects1.length = 0;
gdjs.MenuCode.GDHscoreObjects2.length = 0;
gdjs.MenuCode.GDHscoreObjects3.length = 0;
gdjs.MenuCode.GDHscoreObjects4.length = 0;

gdjs.MenuCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['MenuCode'] = gdjs.MenuCode;
