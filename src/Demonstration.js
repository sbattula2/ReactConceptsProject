import * as All from './Demonstrations/Exporter'

var conceptNames = [`propsInfo`,
`childrenProps`,
`simpleList`,
`properList`,
`keyOperator`,
`spreadOperator`,
`eventListeners`,
`importExport`,
`useState`,
`hookRules`,
`filter`,
`useStateInfo`,
`useEffectNotes`,
`fetchNotes`,
`conditionalReturns`,
`shortCircuit`,
`ternary`,
`hideShowComponent`,
`forms`,
`controlledInputs`,
`useRefNotes`,
`useReducerNotes`,
`propDrilling`,
`useContextNotes`,
`propTypes`,
`reactRouting`,
`urlParams`,
`reactMemo`,
`useCallBackNotes`,
`useMemoNotes`]

export default function Demonstration({conceptName}){

    switch(conceptName){

        case conceptNames[0]:
            return <All.PropDemonstration></All.PropDemonstration>
            

        case conceptNames[1]:
            return <All.ChildPropsDemonstration></All.ChildPropsDemonstration>
            
        
        case conceptNames[2]:
            return <All.SimpleListDemonstration></All.SimpleListDemonstration>
            

        case conceptNames[3]:
            return <All.MapProperList></All.MapProperList>
            

        case conceptNames[4]:
            return <All.KeyOperatorDemonstration></All.KeyOperatorDemonstration>
            

        case conceptNames[5]:
            return <All.SpreadOperatorDemonstration></All.SpreadOperatorDemonstration>
            
        
        case conceptNames[6]:
            return <All.EventListenersDemonstration></All.EventListenersDemonstration>
            

        case conceptNames[7]:
            return null;
            
        
        case conceptNames[8]:
            return <All.UseStateDemonstration></All.UseStateDemonstration>
            

        case conceptNames[9]:
            return null;
            

        case conceptNames[10]:
            return <All.FilterDemonstration></All.FilterDemonstration>
            

        case conceptNames[11]:
            return <div><All.UseStateObjectSetter></All.UseStateObjectSetter><All.UseStateAsync></All.UseStateAsync></div>
            

        case conceptNames[12]:
            return <div><All.UseEffectFirstTime></All.UseEffectFirstTime><All.UseEffectUseState></All.UseEffectUseState><All.UseEffectValChange></All.UseEffectValChange></div>
            

        case conceptNames[13]:
            return null;
            
        case conceptNames[14]:
            return <All.ConditionalReturns></All.ConditionalReturns>
            

        case conceptNames[15]:
            return <All.ShortCircuitDemonstration></All.ShortCircuitDemonstration>
            

        case conceptNames[16]:
            return <All.TernaryDemonstration></All.TernaryDemonstration>
            

        case conceptNames[17]:
            return <All.ShortCircuitDemonstration></All.ShortCircuitDemonstration>
            

        case conceptNames[18]:
            return <All.BasicForm></All.BasicForm>
            

        case conceptNames[19]:
            return <All.ControlledInputs></All.ControlledInputs>
            

        case conceptNames[20]:
            return <All.UseRefDemonstration></All.UseRefDemonstration>
            
        case conceptNames[21]:
            return <div><All.UseReducerBasic></All.UseReducerBasic><All.UseReducerRedux></All.UseReducerRedux></div>
            

        case conceptNames[22]:
            return <All.PropDrillingDemonstration></All.PropDrillingDemonstration>
            

        case conceptNames[23]:
            return <All.UseContextDemonstration></All.UseContextDemonstration>
            

        case conceptNames[24]:
            return <All.UseContextDemonstration></All.UseContextDemonstration>
            

        case conceptNames[25]:
            return <All.ReactRoutingDemonstration></All.ReactRoutingDemonstration>
            

        case conceptNames[26]:
            return <All.UrlParams></All.UrlParams>
            

        case conceptNames[27]:
            return <All.PropDemonstration></All.PropDemonstration>
            

        case conceptNames[28]:
            return <All.PropDemonstration></All.PropDemonstration>
            

        case conceptNames[29]:
            return <All.PropDemonstration></All.PropDemonstration>
            

        case conceptNames[30]:
            return <All.PropDemonstration></All.PropDemonstration>
            

        default:
            return <h2>Huh???</h2>
            
    }

}