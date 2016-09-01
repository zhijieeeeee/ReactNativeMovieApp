package com.movieproject;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * <p>
 * Description：
 * </p>
 *
 * @author tangzhijie
 */
public class MyNativeModule extends ReactContextBaseJavaModule {

    private Context mContext;

    public MyNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mContext = reactContext;
    }

    @Override
    public String getName() {
        return "MyNativeModule";
    }


    @ReactMethod
    public void showMsg(String msg) {
        Toast.makeText(mContext, msg, Toast.LENGTH_SHORT).show();
    }

    /**
     * 通过回调，把结果传给RN
     * @param a
     * @param b
     * @param callback
     */
    @ReactMethod
    public void methodWithCallback(int a, int b, Callback callback){
        int sum=a+b;
        callback.invoke(sum);
    }
}
