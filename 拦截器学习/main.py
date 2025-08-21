import execjs

# js_code="""

# print(execjs.get())#环境检测
#
#
# js_code="""
# function aa(a,b){
# return a+b
# }
#
#
# """
# #编译js代码
# run_js=execjs.compile(js_code)
#
# #执行代码方式 (call / eval)
#
# #方式1 call
# print(run_js.call("aa",1,2))
#
# #方式1 eval
# print(run_js.eval('aa(1,6)'))


with open('被调用的js文件.js',encoding='utf-8') as f:
    js_code = f.read()
    js=execjs.compile(js_code)
    code=js.call("aa",1,2)
    print(code)
