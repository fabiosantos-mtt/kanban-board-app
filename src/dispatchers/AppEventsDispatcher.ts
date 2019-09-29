// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

import { Action }             from 'typescript-fsa';
import { Dispatch }           from 'redux';
import { AppConfig,
         ConfirmDialogProps,
         AppState }           from '../types';
import { AppEventsActions as AppEventsActions_,
         appEventsActions }   from '../actions/AppEventsActions';



export type AppEventsActions = AppEventsActions_;


export function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
    return {
        showAlertDialog: (v: ConfirmDialogProps) =>
            dispatch(appEventsActions.showAlertDialog(v)),
        closeAlertDialog: () =>
            dispatch(appEventsActions.closeAlertDialog()),

        updateAppConfig: (v: AppConfig) =>
            dispatch(appEventsActions.startUpdateAppConfig(v)),
        resetApplication: () =>
            dispatch(appEventsActions.startResetApplication()),
    }
}


export function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.appEvents);
}
