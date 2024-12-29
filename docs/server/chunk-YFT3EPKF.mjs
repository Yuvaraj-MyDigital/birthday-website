import './polyfills.server.mjs';
import{$ as Se,A as re,B as R,C as s,D as a,E as f,F as be,G as p,H as y,I as Me,J as Ee,K as Ae,L as u,M as O,N as we,O as oe,P as se,Q as ae,R as U,S as g,U as Fe,Z as Ie,a as ve,aa as xe,b as ye,ba as le,c as _e,d as G,da as Ne,e as B,ea as H,f as K,fa as Oe,g as X,ga as Te,h as D,ha as Pe,i as Ce,ia as ke,j as S,k as m,l as ee,la as je,m as v,n as Ve,o as b,p as M,pa as Ge,q as De,r as te,ra as A,s as x,sa as Be,t as ie,u as d,v as l,w as ne,x as C,y as N,z as E}from"./chunk-V5VVG2BO.mjs";import{a as _,b as V}from"./chunk-VVCT4QZE.mjs";var Re=(()=>{let e=class e{constructor(){this.title="Virat Kohli"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:1,vars:0,template:function(r,o){r&1&&f(0,"router-outlet")},dependencies:[Ge]});let t=e;return t})();var Ye=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(l(ne),l(te))},e.\u0275dir=v({type:e});let t=e;return t})(),Vt=(()=>{let e=class e extends Ye{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=De(e)))(o||e)}})(),e.\u0275dir=v({type:e,features:[C]});let t=e;return t})(),Ze=new D("");var Dt={provide:Ze,useExisting:B(()=>Z),multi:!0};function bt(){let t=le()?le().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Mt=new D(""),Z=(()=>{let e=class e extends Ye{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!bt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(l(ne),l(te),l(Mt,8))},e.\u0275dir=v({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(c){return o._handleInput(c.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(c){return o._compositionEnd(c.target.value)})},features:[U([Dt]),C]});let t=e;return t})();var Je=new D(""),Qe=new D("");function Ke(t){return t!=null}function Xe(t){return Fe(t)?ve(t):t}function et(t){let e={};return t.forEach(n=>{e=n!=null?_(_({},e),n):e}),Object.keys(e).length===0?null:e}function tt(t,e){return e.map(n=>n(t))}function Et(t){return!t.validate}function it(t){return t.map(e=>Et(e)?e:n=>e.validate(n))}function At(t){if(!t)return null;let e=t.filter(Ke);return e.length==0?null:function(n){return et(tt(n,e))}}function de(t){return t!=null?At(it(t)):null}function wt(t){if(!t)return null;let e=t.filter(Ke);return e.length==0?null:function(n){let i=tt(n,e).map(Xe);return _e(i).pipe(ye(et))}}function ce(t){return t!=null?wt(it(t)):null}function Ue(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ft(t){return t._rawValidators}function It(t){return t._rawAsyncValidators}function ue(t){return t?Array.isArray(t)?t:[t]:[]}function W(t,e){return Array.isArray(t)?t.includes(e):t===e}function He(t,e){let n=ue(e);return ue(t).forEach(r=>{W(n,r)||n.push(r)}),n}function Le(t,e){return ue(e).filter(n=>!W(t,n))}var $=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=de(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ce(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},I=class extends ${get formDirective(){return null}get path(){return null}},j=class extends ${constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},q=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},St={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},wi=V(_({},St),{"[class.ng-submitted]":"isSubmitted"}),nt=(()=>{let e=class e extends q{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(l(j,2))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[C]});let t=e;return t})(),rt=(()=>{let e=class e extends q{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(l(I,10))},e.\u0275dir=v({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[C]});let t=e;return t})();var T="VALID",L="INVALID",F="PENDING",P="DISABLED";function ot(t){return(J(t)?t.validators:t)||null}function xt(t){return Array.isArray(t)?de(t):t||null}function st(t,e){return(J(e)?e.asyncValidators:t)||null}function Nt(t){return Array.isArray(t)?ce(t):t||null}function J(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ot(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new G(1e3,"");if(!i[n])throw new G(1001,"")}function Tt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new G(1002,"")})}var z=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===T}get invalid(){return this.status===L}get pending(){return this.status==F}get disabled(){return this.status===P}get enabled(){return this.status!==P}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(He(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(He(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Le(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Le(e,this._rawAsyncValidators))}hasValidator(e){return W(this._rawValidators,e)}hasAsyncValidator(e){return W(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=F,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=P,this.errors=null,this._forEachChild(i=>{i.disable(V(_({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(_({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=T,this._forEachChild(i=>{i.enable(V(_({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(V(_({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===T||this.status===F)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?P:T}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=F,this._hasOwnPendingAsyncValidator=!0;let n=Xe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new x,this.statusChanges=new x}_calculateStatus(){return this._allControlsDisabled()?P:this.errors?L:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(F)?F:this._anyControlsHaveStatus(L)?L:T}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){J(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=xt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Nt(this._rawAsyncValidators)}},Y=class extends z{constructor(e,n,i){super(ot(n),st(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Tt(this,!0,e),Object.keys(e).forEach(i=>{Ot(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var he=new D("CallSetDisabledState",{providedIn:"root",factory:()=>fe}),fe="always";function Pt(t,e){return[...e.path,t]}function at(t,e,n=fe){lt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),jt(t,e),Bt(t,e),Gt(t,e),kt(t,e)}function We(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function kt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function lt(t,e){let n=Ft(t);e.validator!==null?t.setValidators(Ue(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=It(t);e.asyncValidator!==null?t.setAsyncValidators(Ue(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();We(e._rawValidators,r),We(e._rawAsyncValidators,r)}function jt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ut(t,e)})}function Gt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ut(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ut(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Bt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Rt(t,e){t==null,lt(t,e)}function Ut(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Ht(t){return Object.getPrototypeOf(t.constructor)===Vt}function Lt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Wt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===Z?n=o:Ht(o)?i=o:r=o}),r||i||n||null}var $t={provide:I,useExisting:B(()=>pe)},k=Promise.resolve(),pe=(()=>{let e=class e extends I{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new x,this.form=new Y({},de(i),ce(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){k.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),at(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){k.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){k.then(()=>{let r=this._findContainer(i.path),o=new Y({});Rt(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){k.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){k.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Lt(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(l(Je,10),l(Qe,10),l(he,8))},e.\u0275dir=v({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&p("submit",function(c){return o.onSubmit(c)})("reset",function(){return o.onReset()})},inputs:{options:[S.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[U([$t]),C]});let t=e;return t})();function $e(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function qe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var qt=class extends z{constructor(e=null,n,i){super(ot(n),st(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),J(n)&&(n.nonNullable||n.initialValueIsDefault)&&(qe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){$e(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){$e(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){qe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var zt={provide:j,useExisting:B(()=>me)},ze=Promise.resolve(),me=(()=>{let e=class e extends j{constructor(i,r,o,h,c,Ct){super(),this._changeDetectorRef=c,this.callSetDisabledState=Ct,this.control=new qt,this._registered=!1,this.name="",this.update=new x,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Wt(this,h)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Ut(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){at(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){ze.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Se(r);ze.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Pt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(l(I,9),l(Je,10),l(Qe,10),l(Ze,10),l(Ie,8),l(he,8))},e.\u0275dir=v({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[S.None,"disabled","isDisabled"],model:[S.None,"ngModel","model"],options:[S.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[U([zt]),C,Ve]});let t=e;return t})(),dt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=v({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Yt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ee({type:e}),e.\u0275inj=X({});let t=e;return t})();var ct=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:he,useValue:i.callSetDisabledState??fe}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ee({type:e}),e.\u0275inj=X({imports:[Yt]});let t=e;return t})();var Q=(()=>{let e=class e{constructor(i){this.route=i}login(i,r){return i=="elara"&&r=="sweetie"?200:403}logout(){this.route.navigate(["login"])}};e.\u0275fac=function(r){return new(r||e)(Ce(A))},e.\u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ge=(()=>{let e=class e{constructor(i,r){this.auth=i,this.router=r,this.username="",this.password="",this.error_msg=""}login(){let i=this.auth.login(this.username,this.password);i==200?this.router.navigate(["home"]):i==403&&(this.error_msg="Not So Sweet Jo")}};e.\u0275fac=function(r){return new(r||e)(l(Q),l(A))},e.\u0275cmp=m({type:e,selectors:[["app-login"]],standalone:!0,features:[g],decls:23,vars:3,consts:[[1,"row","justify-content-center","align-items-center","full-screen-container","p-0","m-0"],[1,"col-12","col-md-6","col-lg-4"],[1,"login-form"],["action","",1,"bg-body","rounded","p-4"],[1,"text-center","mb-4"],[1,"username-highlight"],[1,"text-center","mb-4","welcome-message"],[1,"mb-3"],[1,"username-highlight","text-center","text-danger","font-italic"],["for","username",1,"form-label"],["type","text","placeholder","Enter Your Username","name","username",1,"form-control","rounded-0",3,"ngModelChange","ngModel"],["for","Password",1,"form-label"],["type","password","placeholder","Enter Your Password","name","password",1,"form-control","rounded-0",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary","rounded-0","w-100",3,"click"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"h4",4),u(5,"Welcome Back, "),s(6,"span",5),u(7,"Joshika"),a()(),s(8,"p",6),u(9,"Please log in to access your special space."),a(),s(10,"div",7)(11,"p",8)(12,"b"),u(13),a()(),s(14,"label",9),u(15,"Username"),a(),s(16,"input",10),ae("ngModelChange",function(c){return se(o.username,c)||(o.username=c),c}),a()(),s(17,"div",7)(18,"label",11),u(19,"Password"),a(),s(20,"input",12),ae("ngModelChange",function(c){return se(o.password,c)||(o.password=c),c}),a()(),s(21,"button",13),p("click",function(){return o.login()}),u(22,"Login"),a()()()()()),r&2&&(d(13),O(o.error_msg),d(3),oe("ngModel",o.username),d(4),oe("ngModel",o.password))},dependencies:[ct,dt,Z,nt,rt,me,pe]});let t=e;return t})();var pt=(()=>{let e=class e{constructor(i,r){this.route=i,this.auth=r}goToHome(){this.route.navigate(["home"])}logout(){this.auth.logout}};e.\u0275fac=function(r){return new(r||e)(l(A),l(Q))},e.\u0275cmp=m({type:e,selectors:[["app-header"]],standalone:!0,features:[g],decls:9,vars:0,consts:[[1,"header"],[1,"container","p-0","m-0"],[1,"title","p-0"],[1,"sweeting"],[1,"quote-container","p-0","m-0"],[1,"quote"]],template:function(r,o){r&1&&(s(0,"header",0)(1,"div",1)(2,"h1",2)(3,"span",3),u(4,"Sweetie,"),a(),u(5," Joshika "),a(),s(6,"div",4)(7,"p",5),u(8,'"May this melody be a sweet serenade to your soul"'),a()()()())}});let t=e;return t})();var Jt=["audioControl"];function Qt(t,e){if(t&1&&(s(0,"span"),u(1),a()),t&2){let n=y(2);d(),O(n.formatTime(n.currentTime))}}function Kt(t,e){t&1&&(s(0,"span"),u(1,"00:00"),a())}function Xt(t,e){if(t&1&&(s(0,"span"),u(1),a()),t&2){let n=y(2);d(),O(n.formatTime(n.duration))}}function ei(t,e){t&1&&f(0,"span",25)}function ti(t,e){t&1&&(s(0,"span",26),f(1,"div")(2,"div"),a())}function ii(t,e){if(t&1){let n=be();s(0,"div",4)(1,"div",7)(2,"div",8),f(3,"img",9),a()(),s(4,"div",10)(5,"div",11)(6,"b")(7,"p",12),u(8),a()()()(),s(9,"div",13)(10,"div",14)(11,"audio",15,0),p("timeupdate",function(){b(n);let r=y();return M(r.updateTime())}),f(13,"source",16),a()(),s(14,"div",17),N(15,Qt,2,1,"span")(16,Kt,2,0),s(17,"input",18),p("input",function(r){b(n);let o=y();return M(o.onSeek(r))}),a(),N(18,Xt,2,1,"span"),a()(),s(19,"div",14)(20,"button",19),p("click",function(){b(n);let r=y();return M(r.playpreviousAudio())}),f(21,"span",20),a(),s(22,"button",21),p("click",function(){b(n);let r=y();return M(r.togglePlayPause())}),N(23,ei,1,0,"span",22)(24,ti,3,0,"span",23),a(),s(25,"button",19),p("click",function(){b(n);let r=y();return M(r.nextAudio())}),f(26,"span",24),a()()()}if(t&2){let n=y();d(3),E("src",n.audioDetails[n.audioIncrement].cover,ie),d(5),we(" ",n.audioDetails[n.audioIncrement].name,""),d(5),E("src",n.audioDetails[n.audioIncrement].url,ie),d(2),R(15,n.currentTime?15:16),d(2),E("max",n.duration)("value",n.currentTime),d(),R(18,n.duration?18:-1),d(5),E("ngIf",!n.isPlaying),d(),E("ngIf",n.isPlaying)}}function ni(t,e){t&1&&(s(0,"div",27)(1,"div",27)(2,"video",28,1),f(4,"source",29),a()()())}var mt=(()=>{let e=class e{constructor(i){this.http=i,this.audioIncrement=0,this.player=document.getElementById("audioControl"),this.audioList=[{url:"assets/birthday/Audio1.mp3",name:"Happy Birthday",cover:"assets/birthday/1.jpg"},{url:"assets/birthday/Standard recording 11.mp3",name:"I'm Obsessed",cover:"assets/birthday/2.jpeg"},{url:"assets/birthday/Standard recording 13.mp3",name:"Thinking Of You",cover:"assets/birthday/3.jpg"}],this.isPlaying=!1,this.currentTime=0,this.duration=0}ngOnInit(){this.getAudioDetails()}ngAfterViewInit(){this.player=document.getElementById("audioControl"),this.duration=this.player.duration,console.log(this.player)}getAudioDetails(){this.audioDetails=this.audioList}nextAudio(){this.audioIncrement+=1,this.player?.load(),this.player?.play(),console.log(this.audioIncrement)}playpreviousAudio(){this.audioIncrement-=1,this.audioIncrement<0&&(this.audioIncrement=0),this.player?.load(),this.player?.play()}togglePlayPause(){this.isPlaying?this.player?.pause():this.player?.play(),this.isPlaying=!this.isPlaying}updateTime(){let i=this.audioElement.nativeElement;this.currentTime=i.currentTime,this.duration=i.duration}onSeek(i){let r=this.audioElement.nativeElement;r.currentTime=i.target.value}formatTime(i){let r=Math.floor(i/60),o=Math.floor(i%60);return`${r}:${o<10?"0":""}${o}`}};e.\u0275fac=function(r){return new(r||e)(l(Oe))},e.\u0275cmp=m({type:e,selectors:[["app-movies"]],viewQuery:function(r,o){if(r&1&&Me(Jt,5),r&2){let h;Ee(h=Ae())&&(o.audioElement=h.first)}},standalone:!0,features:[g],decls:7,vars:1,consts:[["audioControl",""],["videoControl",""],[1,"container-fluid","m-0","my-2"],[1,"row","m-0","p-0"],[1,"col-12","m-0","p-0","mb-3","mt-5"],[1,"footer"],[1,"footer-text"],[1,"col-12","d-flex","justify-content-center","align-items-center"],[1,"cd-container"],["alt","movie",1,"card-img",3,"src"],[1,"detail","col-11","px-3","pt-5"],[1,"d-flex","justify-content-center","align-items-center","name"],[1,"mx-auto",2,"font-size","1.5rem"],[1,"col-12","py-2"],[1,"d-flex","justify-content-center","align-items-center","py-2"],["id","audioControl","controls","","hidden","",1,"h-0","w-0","m-0","p-0",3,"timeupdate"],[3,"src"],[1,"time-bar-container"],["type","range","min","0",1,"time-bar",3,"input","max","value"],[1,"nav-button",3,"click"],[1,"chevron-left"],[1,"play-button",3,"click"],["class","play-icon",4,"ngIf"],["class","pause-icon",4,"ngIf"],[1,"chevron-right"],[1,"play-icon"],[1,"pause-icon"],[1,"d-flex","justify-content-center","align-items-center"],["id","videoControl","controls",""],["src","assets/birthday/InShot_20241228_134315424.mp4"]],template:function(r,o){r&1&&(s(0,"div",2)(1,"div",3),N(2,ii,27,9,"div",4)(3,ni,5,0),a()(),s(4,"footer",5)(5,"p",6),u(6,"Happy Birthday, Joshika! \u{1F496}"),a()()),r&2&&(d(2),R(2,o.audioIncrement!=3?2:3))},dependencies:[H,Ne]});let t=e;return t})();var gt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-home"]],standalone:!0,features:[g],decls:2,vars:0,template:function(r,o){r&1&&f(0,"app-header")(1,"app-movies")},dependencies:[pt,mt,Te,H]});let t=e;return t})();var vt=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:ge},{path:"home",component:gt},{path:"**",component:ge}];var yt={providers:[Be(vt),ke()]};var ri={providers:[je()]},_t=xe(yt,ri);var oi=()=>Pe(Re,_t),sn=oi;export{sn as a};
