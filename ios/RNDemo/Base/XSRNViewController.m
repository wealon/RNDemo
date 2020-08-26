//
//  XSRNViewController.m
//  RNDemo
//
//  Created by wealon on 2020/8/18.
//  Copyright © 2020 wealon. All rights reserved.
//

#import "XSRNViewController.h"
#import "XSReactView.h"

@interface XSRNViewController ()

@property (nonatomic, strong) XSReactView *reactView;

@end

@implementation XSRNViewController

- (instancetype)initWithModuleName:(NSString *)moduleName
                 initialProperties:(NSDictionary *)initialProperties
                     launchOptions:(NSDictionary *)launchOptions
{
    if (self = [super init]) {
        CGSize screenSize = [UIScreen mainScreen].bounds.size;
        XSReactView *reactView = [[XSReactView alloc] initWithFrame:CGRectMake(0, 0, screenSize.width, screenSize.height)];
        [self.view addSubview:reactView];
        self.reactView = reactView;
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
    
}



@end
