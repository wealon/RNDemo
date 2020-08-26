//
//  ViewController.m
//  RNDemo
//
//  Created by wealon on 2020/8/13.
//  Copyright © 2020 wealon. All rights reserved.
//

#import "ViewController.h"
#import "XSRNViewController.h"
#import <React/RCTRootView.h>

@interface ViewController ()


@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.view.backgroundColor = [UIColor whiteColor];
    
    [self.navigationController setNavigationBarHidden:YES];
    
    
}

- (void)viewDidAppear:(BOOL)animated
{
    [self toMovePage];
}

- (IBAction)toMovePage
{
    XSRNViewController *movieVC = [[XSRNViewController alloc] initWithModuleName:@"index"
                                                               initialProperties:nil
                                                                   launchOptions:nil];
    [self.navigationController pushViewController:movieVC animated:YES];
    
}

- (IBAction)toLayoutPage
{
    XSRNViewController *movieVC = [[XSRNViewController alloc] initWithModuleName:@"index"
                                                               initialProperties:nil
                                                                   launchOptions:nil];
    [self.navigationController pushViewController:movieVC animated:YES];
}


@end
